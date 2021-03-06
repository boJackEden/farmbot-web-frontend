import * as React from "react";

export class ToggleButton extends React.Component<any, any> {
  caption() {
    let captions  = {
      "0":         "no",
      "false":     "no",
      "off":       "no",
      "1":         "yes",
      "true":      "yes",
      "on":        "yes",
      "undefined": "---",
    };
    let togval = String(this.props.toggleval);
    if(togval){
      return (captions as any) [togval];
    } else {
      "---"
    }
  }

  css() {
    let redCSS    = "button-like red";
    let greenCSS  = "button-like green";
    let yellowCSS = "button-like yellow";

    let cssClasses = {
      "0":         redCSS,
      "false":     redCSS,
      "off":       redCSS,
      "1":         greenCSS,
      "true":      greenCSS,
      "on":        greenCSS,
      "undefined": yellowCSS
    };

    return (cssClasses as any)[String(this.props.toggleval)] || yellowCSS;
  }

  render() {
    return <button className={ this.css() }
                   onClick={ this.props.toggleAction }> { this.caption() }</button>;
  }
}
