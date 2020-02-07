import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        Children names
      </header>

      <Parent>

        <p>
          ChildContainer order in JSX: One, Two, Three, Class<br/>
          Parent renders in other order<br/>
          This is a child as well, a /P/
        </p>

        <ChildContainerOne>
          First child content
        </ChildContainerOne>

        <ChildContainerTwo>
          Second child content
        </ChildContainerTwo>

        <ChildContainerThree>
          Third child content
        </ChildContainerThree>

        <ClassChildContainer>
          Content to class component
        </ClassChildContainer>

      </Parent>

    </div>
  );
};

export class Parent extends React.Component {

  getComponentName = name => {
    console.log(this.props.children)
    console.log(React.Children.toArray(this.props.children))
    
    let b = false;

    React.Children.forEach(React.Children.toArray(this.props.children), child => {
      console.log('Child object: ', child);

      if((typeof child.type === 'function') && (child.type.name === name)){
        console.log('Funcion (React Component) name: ', child.type.name);
        const a = child.key;
        console.log('return: ', a.substring(1))
        b = a.substring(1)
        return b
      }
    });
    return b
  };

  render() {
    return(
      <div>
        {this.props.children[1]}
        {
          this.getComponentName('ChildContainerThree')
            ? this.props.children[this.getComponentName('ChildContainerThree')]
            : 'hm'
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
}
