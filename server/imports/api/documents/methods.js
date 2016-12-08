import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Documents from './documents';
import rateLimit from '../../modules/rate-limit';

const exec = require('child_process').exec;
const Fiber = require('fibers');

export const upsertDocument = new ValidatedMethod({
  name: 'documents.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    title: { type: String, optional: true },
    body: { type: String, optional: true },
  }).validator(),
  run(document) {
    return Documents.upsert({ _id: document._id }, { $set: document });
  },
});

export const removeDocument = new ValidatedMethod({
  name: 'documents.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Documents.remove(_id);
  },
});

export const Shell = new ValidatedMethod({
  name: 'shell',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    cmd: { type: String, optional: true },
  }).validator(),
  run(document) {
    exec(document.cmd, (err, stdout, stderr) => {
      const output = {
        title: document.cmd,
        body: stdout.toString(),
        createdAt: new Date(),
      };
      console.log(output);
      Fiber(() => {
        Documents.upsert({ _id: output._id }, { $set: output });
      }).run();
    });
  },
});

rateLimit({
  methods: [
    upsertDocument,
    removeDocument,
  ],
  limit: 5,
  timeRange: 1000,
});
