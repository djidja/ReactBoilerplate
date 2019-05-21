import React, { Component } from 'react';

//stateless function component, they start with big letter 
const MyInput = (props) => {
    return(
        <input
        //ref is "id" of element to call 
        ref={props.inputRef}
        type="text" />
    )
}

//stateless function component
const FunctionalComponent = () => {
    //for functional component you have to initialize it
    let inputRef = null,

    clickFunc = () => {
        //gives focus on element with this attributes
        inputRef.focus();
    }
    
    return(
        <div>
            <div>
                <span>My input</span>
                {/* this stateless component can get info that is passed. In this case inputRef is passed to component via props so getting that would be "props.inputRef" or "this.props.inputRef" */}
                <MyInput 
                    // inb inputRef you can pass anything, this is arrow function which dinamicly passes attributes
                    inputRef={(input) => {inputRef = input}}
                />
                <input 
                    type="submit" 
                    value="submit"
                    onClick={clickFunc}/>
            </div>
        </div>
    )

}


class Refs extends Component {

    //any logic can be added here
    printThatShit = () => {
        //reference to elements
        console.log(this.firstName, this.lastName);
        //reference to values
        console.log(this.firstName.value, this.lastName.value);
    }

    //target in this contex is element to reffer to
    //element is string that is checked after in cases
    pressedKey = (target, element) => {
        //keyCode 13 is "enter" button on keyboard
        if(element.keyCode === 13) {
            //switch through different input
            switch (target) {
                case 'firstName' :
                    //focus is JS function that for example let you start writing immediately
                    this.lastName.focus();
                    //break is stoping checking, we dont need it to go through all cases
                    break;
                case 'lastName' :
                    this.age.focus();
                    break;
                case 'age' :
                    this.submit.focus();
                    break;
                default :
                    this.firstName.focus();
                    break;
            }
        }

    }

    render(){
        return(
            <div>
                {/* including that function component from line 14 */}
                <FunctionalComponent />
                <div>
                    <span>First Name:</span>
                    <input 

                        ref={(inputReferenceName) => this.firstName = inputReferenceName}
                        //I would really want to say why here bind goes, but dont know ATM :)
                        onKeyUp={this.pressedKey.bind(this, 'firstName')} 
                        type="text" />
                </div>
                <div>
                    <span>Last Name:</span>
                    <input 
                        ref={(inputReferenceLastName) => this.lastName = inputReferenceLastName}
                        onKeyUp={this.pressedKey.bind(this, 'lastName')}  
                        type="text" />
                </div>
                <div>
                    <span>Age:</span>
                    <input 
                        ref={(input)=>{this.age = input}}
                        onKeyUp={this.pressedKey.bind(this, 'age')} 
                        type="text" />
                </div>
                <div>
                    <input 
                        type="submit" 
                        value="submit" 
                        ref={(input) => {this.submit = input}}
                        onKeyUp={this.pressedKey.bind(this, 'firstName')} 
                        onClick={this.printThatShit}/>
                </div>
            </div>
        )
    }

}

export default Refs;
