import React from 'react'

const Header = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}

const Content = (props) => {
    const {parts} = props
    return (
        <div>
          {parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}
        </div>
    )
}

const Total = (props) => {
    const {parts} = props
    const result = parts.reduce((total, {exercises}) => total + exercises, 0)
    return (
      <div>
        <p><b>total of {result} exercises</b></p>
      </div>
  )
}

const Course = (props) => {
    return (
      <div>
        <Header name={props.course.name} />
        <Content parts={props.course.parts}/>
        <Total parts={props.course.parts}/>
      </div>
    )
  }

  export default Course