import React, {
  Component,
} from "react";

import Dialog from "material-ui/Dialog";

const styles = {
  dialogRoot: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 0
  },
  dialogContent: {
    position: "relative",
    width: "90vw",
    transform: "",
  },
  dialogBody: {
    padding: 14,
  }
};

export default class CustomDialog extends Component {
  freezeBody() {
    document.body.style.position = 'fixed';
  }

  thawBody() {
    document.body.style.position = 'static';
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.open) this.freezeBody();
    else this.thawBody();
  }

  render () {
    const { ...props } = this.props;
    return (
      <Dialog
        {...props}
        contentStyle={ styles.dialogContent }
        bodyStyle={ styles.dialogBody }
        style={ styles.dialogRoot }
        autoScrollBodyContent={ true }
        repositionOnUpdate={ false }
      />
    );
  }
}