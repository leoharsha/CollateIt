College = new Mongo.Collection('colleges');
Books = new Mongo.Collection("books");
Message = new Mongo.Collection('messages');
Books.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  author: {
    type: String,
    label: "Author"
  },
  copies: {
    type: Number,
    label: "Number of copies",
    min: 0
  },
  lastCheckedOut: {
    type: Date,
    label: "Last date this book was checked out",
    optional: true
  },
  summary: {
    type: String,
    label: "Brief summary",
    optional: true,
    max: 1000
  }
}));
if (Meteor.isServer) {
  if (College.find().count() === 0) {
  College.insert({
    rankpts:10,
    name: "NIT-Warangal" ,
    infra: 10,
    fee: 4,
rank: 1,
    cutoff:10,
    placements:10,
    department: 10,
    students: 8,
    fest:9,
    zone: "SOUTH",
total:230.0
  });
  College.insert({
    rank: 2,
    rankpts:10,
    name: "NIT-Tiruchirapalli" ,
    infra: 8,
    fee: 5,
total:224.0,
    cutoff:10,
    placements:10,
    department: 9,
    students: 8,
    fest:8,
    zone: "SOUTH"
  });
  College.insert({
    rank: 3,
    rankpts:10,
    name: "NIT-Suratkal" ,
    infra: 10,
    fee: 5,
total:223.25,
    cutoff:9,
    placements:9,
    department: 9,
    students: 8,
    fest:9,
    zone: "SOUTH"
  });

  College.insert({
    rank: 4,
    rankpts:9,
    name: "MNNIT-Allahabad" ,
    infra: 8,
    fee: 6,
total:207.0,
    cutoff:8,
    placements:9,
    department: 8,
    students: 8,
    fest:8,
    zone: "NORTH"
  });
  College.insert({
    rank: 5,
    rankpts:9,
    name: "NIT-Calicut" ,
    infra: 8,
    fee: 5,
total:203.5,
    cutoff: 8,
    placements:9,
    department: 8,
    students: 8,
    fest:8,
    zone: "SOUTH"
  });
  College.insert({
    rank: 6,
    rankpts:8,
    name: "MNIT-Jaipur" ,
    infra: 9,
    fee: 5,
total:198.5,
    cutoff:8,
    placements:8,
    department: 8,
    students: 9,
    fest:7,
    zone: "NORTH"
  });
  College.insert({
    rank: 7,
    rankpts:8,
    name: "MANIT-Bhopal" ,
    infra: 8,
    fee: 4,
total:193.5,
    cutoff:8,
    placements:9,
    department: 8,
    students: 8,
    fest:7,
    zone: "WEST"
  });
  College.insert({
    rank: 8,
    rankpts:8,
    name: "VNIT-Nagpur" ,
    infra: 8,
    fee: 5,
total:187.5,
    cutoff:8,
    placements:7,
    department: 8,
    students: 6,
    fest:8,
    zone: "WEST"
  });
  College.insert({
    rank: 9,
    rankpts:7,
    name: "NIT-Kurukshetra" ,
    infra: 7,
    fee: 6,
total:178.75,
    cutoff:7,
    placements:7,
    department: 7,
    students: 8,
    fest:7,
    zone: "NORTH"
  });
  College.insert({
    rank: 10,
    rankpts:7,
    name: "NIT-Rourkela" ,
    infra: 7,
    fee: 6,
total:176.25,
    cutoff:7,
    placements:7,
    department: 7,
    students: 8,
    fest:6,
    zone: "EAST"
  });
  College.insert({
    rank: 11,
    rankpts:6,
    name: "NIT-Hamirpur" ,
    infra: 7,
    fee: 6,
total:169.0,
    cutoff:6,
    placements:6,
    department: 8,
    students: 6,
    fest:8,
    zone: "NORTH"
  });
  College.insert({
    rank: 12,
    rankpts:5,
    name: "NIT-Surat" ,
    infra: 6,
    fee: 6,
total:155.75,
    cutoff:5,
    placements:6,
    department: 8,
    students: 6,
    fest:7,
    zone: "NORTH"
  });
  College.insert({
    rank: 13,
    rankpts:5,
    name: "NIT-Jalandhar" ,
    infra: 6,
    fee: 6,
total:152.25,
    cutoff:5,
    placements:6,
    department: 7,
    students: 7,
    fest:6,
    zone: "NORTH"
  });
  College.insert({
    rank: 14,
    rankpts:4,
    name: "NIT-Durgapur" ,
    infra: 5,
    fee: 6,
total:144.25,
    cutoff:5,
    placements:6,
    department: 7,
    students: 8,
    fest:5,
    zone: "EAST"
  });
  College.insert({
    rank: 15,
    rankpts:4,
    name: "NIT-Jamshedpur" ,
    infra: 6,
    fee: 5,
total:134.5,
    cutoff:4,
    placements:5,
    department: 6,
    students: 7,
    fest:6,
    zone: "NORTH"
  });

}
}
