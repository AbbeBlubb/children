import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        Children component names
      </header>
      <p>
        Markup order of children components: parraf, One, Two, Three, Class<br/>
        Parent will select components by name (excluding elements, texts, functions)<br/>
        and render selected children components in different order
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
    // Zero children: props.children = undefined
    // One child: props.children = {...}
    // If the one child is a string: props.children = 'the-string'
    // Several children: props.children = [{...}, {...}, ...]
    // With React.Children.toArray, the output is always an array: empty (truthy) or with one or more objects
    console.log('props.children as-is: ', this.props.children);
    console.log('props.children toArray: ', React.Children.toArray(this.props.children));

    let component = null;

    React.Children.forEach(React.Children.toArray(this.props.children), child => {
      console.log('Child object: ', child);

      if(
        // Exclude empty .toArray.
        // If not using .toArray and using .length of props.children as-is and children is a string, the .length will give the string length
        (React.Children.toArray(this.props.children).length > 0) &&
        // Must be a React component or a React element (HTML element), excludes eg. text
        (React.isValidElement(child)) &&
        // Must be a function, excludes HTML elements = it's a React component
        (typeof child.type === 'function') &&
        // A React component has it's name in type.name
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
