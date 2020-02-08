import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        Children component names
      </header>

      <p>
         Markup order of children components: Paragraph, One, Two, Three, Class<br/>
        Parent will render children components in different order
      </p>

      <Parent>
        <p>
          Paragraph
        </p>
        <ChildContainerOne>
          One
        </ChildContainerOne>
        <ChildContainerTwo>
          Two
        </ChildContainerTwo>
        <ChildContainerThree>
          Three
        </ChildContainerThree>
        <ClassChildContainer>
          Class
        </ClassChildContainer>
      </Parent>

    </div>
  );
};

export class Parent extends React.Component {

  getChildrenComponent = name => {
    // Cero children: props.children = undefined
    // One child: props.children = {}
    // Several children: props.children = [{}, {}, ...]
    // With React.Children.toArray, the output is always an array: empty (truthy) or with one or more objects
    console.log('props.children toArray: ', React.Children.toArray(this.props.children));

    let component = null;

    React.Children.forEach(React.Children.toArray(this.props.children), child => {
      console.log('Child object: ', child);

      if(
        (React.Children.toArray(this.props.children).length > 0) &&
        (React.isValidElement(child)) && // Must be a React element like a component or a HTML element, not text
        (typeof child.type === 'function') && // The element must be a function, excludes HTML elements
        (child.type.name === name)){

          component = child;
          console.log('React Component name: ', child.type.name);
      }
    });
    return component;
  };

  render() {
    return(
      <>
        {
          this.getChildrenComponent('ClassChildContainer')
        }
        {
          this.getChildrenComponent('ChildContainerTwo')
        }
      </>
    );
  }
};

export const ChildContainerOne = props => {
  return(
    <div className="child-container-one">
      {props.children}
    </div>
  );
};

export const ChildContainerTwo = props => {
  return(
    <div className="child-container-two">
      {props.children}
    </div>
  );
};

export const ChildContainerThree = props => {
  return(
    <div className="child-container-three">
      {props.children}
    </div>
  );
};

export class ClassChildContainer extends React.Component {
  render() {
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
};
