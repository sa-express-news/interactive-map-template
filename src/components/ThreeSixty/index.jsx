import React, {Component}   from 'react';
import 'pannellum';

import 'pannellum/build/pannellum.css';

class ThreeSixty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pano: null,
            node: null,
        };
        this._panoNode  = null;
        this.configBase = { type: 'equirectangular', autoLoad: true };
    }

    componentDidMount() {
        this.init(this._panoNode);
    }

    componentWillUnmount() {
        this.destroyViewer();
    }

    componentWillUpdate(nextProps, nextState) {
        const { media } = nextProps.content;
        if (media !== this.props.content.media) {
            this.update(media);
        }
    }

    getConfig(media) {
        const panorama = require(`../../panos/${media}`);
        return Object.assign({}, this.configBase, { panorama })
    }

    destroyViewer() {
        this.state.pano.destroy(); // panellum is mounted globally (bleh), so we need to make sure to destroy viewer instances in all edge cases
    }

    update(media) {
        if (this.state.pano) this.destroyViewer();
        const pano = window.pannellum.viewer(this.state.node, this.getConfig(media));
        this.setState({ pano });
    }

    init(node) {
        const pano = window.pannellum.viewer(node, this.getConfig(this.props.content.media));
        this.setState({ pano, node });
    }

    render() {
        return <div ref={node => this._panoNode = node} style={{ height: 300 }} />
    }
}

export default ThreeSixty;
