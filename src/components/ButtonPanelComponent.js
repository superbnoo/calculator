import React, { Component } from 'react';
import Button from "./Button";

class ButtonPanelComponent extends Component {

  handleClick = buttonName => {
    this.props.onClick(buttonName);
  };

  render() {
    return (
      <div className="calculator-panel">
        <div>

          <Button name="CE" clickHandler={this.handleClick} wide/>
          <Button name="C" clickHandler={this.handleClick} />
          <Button name="÷" clickHandler={this.handleClick} red />

        </div>

        <div>
          <Button name="7" clickHandler={this.handleClick} />
          <Button name="8" clickHandler={this.handleClick} />
          <Button name="9" clickHandler={this.handleClick} />
          <Button name="*" clickHandler={this.handleClick} red />

        </div>
        <div>
          <Button name="4" clickHandler={this.handleClick} />
          <Button name="5" clickHandler={this.handleClick} />
          <Button name="6" clickHandler={this.handleClick} />
          <Button name="-" clickHandler={this.handleClick} red />
        </div>
        <div>

          <Button name="1" clickHandler={this.handleClick} />
          <Button name="2" clickHandler={this.handleClick} />
          <Button name="3" clickHandler={this.handleClick} />
          <Button name="+" clickHandler={this.handleClick} red />
        </div>
        <div>
          <Button name="0" clickHandler={this.handleClick} wide />
          <Button name="." clickHandler={this.handleClick} />
          <Button name="=" clickHandler={this.handleClick} red />
        </div>

      </div>
    );
  }
}


export default ButtonPanelComponent;
