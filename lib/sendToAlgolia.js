#!/usr/bin/env -S node

const algolia = require("algoliasearch");
const fs = require("fs");
const path = require("path");

const applicationID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const adminKey = process.env.ALGOLIA_API_KEY_ADMIN;
const indexName = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME;

const client = algolia.algoliasearch(applicationID, adminKey);

const recordsPath = path.join(process.cwd(), "/lib/records.json");
const data = JSON.parse(
  fs.readFileSync(recordsPath),
);

const records = data.map((record) => {
  return {
    action: "addObject",
    body: record,
  };
});

client.batch({
  indexName,
  batchWriteParams: {
    requests: records,
  },
}, { autoGenerateObjectIDIfNotExist: true })
  .then((infoAlg) => {
    const newRecords = data;
    infoAlg.objectIDs.forEach((objectID, index) => {
      newRecords[index] = {
        ...newRecords[index],
        objectID,
      };
    });
    fs.writeFileSync(recordsPath, JSON.stringify(newRecords));
  })
  .then((_) => {
    console.log("Indexes updated 📎");
  });
