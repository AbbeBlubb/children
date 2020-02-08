import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        Children names
      </header>

      <p>
         Markup order of childs: Paragraph, One, Two, Three, Class<br/>
        Parent will render childs in different order
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

  getComponentName = name => {
    // Cero children: undefined
    // One or more children: props.children = {}
    // With React.Children.toArray, the output is always an array: empty (truthy) or with one or more objects
    console.log('props.children as is: ', this.props.children);
    console.log('props.children toArray: ', React.Children.toArray(this.props.children));

    let childIndex = false;

    React.Children.forEach(React.Children.toArray(this.props.children), child => {
      console.log('Child object: ', child);

      if(
        (React.Children.toArray(this.props.children).length > 0) &&
        (React.isValidElement(child)) &&
        //(typeof child.type === 'function') &&
        (child.type.name === name)){

          childIndex = child.key.substring(1);
          console.log('Funcion (React Component) name: ', child.type.name);
      }
    });
    return childIndex;
  };

  render() {
    return(
      <div>
        {
          this.getComponentName('ClassChildContainer')
            ? this.props.children[this.getComponentName('ClassChildContainer')]
            : 'Negative searach'
        }
        {
          this.getComponentName('ChildContainerTwo')
            ? this.props.children[this.getComponentName('ChildContainerTwo')]
            : 'Negative searach'
        }
      </div>
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
