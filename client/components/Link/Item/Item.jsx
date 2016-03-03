/**
 * Link Item
 */
Link = typeof Link === 'undefined' ? {} : Link;

Link.Item = React.createClass({
  mixins: [ReactMeteorData, ReactBEM],
  getMeteorData() {
    return {};
  },
  getInitialState() {
    return {};
  },
  getDefaultProps() {
    return {
      link: {}
    };
  },
  componentDidMount() {
    //
  },
  bem_blocks: ['item'],
  bem_block_modifiers: ['link'],
  bem_render() {
    return (
      <div bem_element="">
        {this.props.link.source} — <a href={this.props.link.sourceUrl} target="_blank">{this.props.link.sourceUrl}</a>
      </div>
    );
  }
});
