/**
 * Link List
 */
Link = typeof Link === 'undefined' ? {} : Link;

Link.List = React.createClass({
  mixins: [ReactMeteorData, ReactBEM],
  getMeteorData() {
    return {
      links: Links.find({}).fetch()
    };
  },
  getInitialState() {
    return {};
  },
  getDefaultProps() {
    return {};
  },
  componentDidMount() {
    //
  },
  bem_blocks: ['list'],
  bem_block_modifiers: ['link'],
  bem_render() {
    return (
      <div bem_element="">
        {this.data.links.map(function(link) {
          return <Link.Item key={link._id} link={link}/>
        })}
      </div>
    );
  }
});
