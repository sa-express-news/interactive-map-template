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
    width: "80vw",
    transform: "",
  },
  dialogBody: {
    paddingBottom: 0
  }
};

export default class CustomDialog extends Component {
  render () {
    const { ...props } = this.props;
    return (
      <Dialog
        {...props}
        contentStyle={ styles.dialogContent }
        bodyStyle={ styles.dialogBody }
        style={ styles.dialogRoot }
        repositionOnUpdate={ false }
      />
    );
  }
}