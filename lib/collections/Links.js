/**
 * Links
 */
Links = new Mongo.Collection('links');

var LinksSchema = new SimpleSchema({
  source: {
    type: String,
    label: "The readable name of the Link"
  },
  sourceUrl: {
    type: String,
    regEx: SimpleSchema.RegEx.Url,
    label: "The link"
  },
  categoryUrls: {
    type: [String],
    regEx: SimpleSchema.RegEx.Url,
    label: "Links to specific categories on the site",
    optional: true
  },
  rssUrls: {
    type: [String],
    regEx: SimpleSchema.RegEx.Url,
    label: "Links to specific RSS feeds on the site",
    optional: true
  }
});

Links.attachSchema(LinksSchema);

