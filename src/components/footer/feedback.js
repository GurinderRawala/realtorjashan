import React from "react";
import footerStyle from "./footer-style";
const FeedBack = ({title, questions}) =>{
    return(
        <>
        <h1>{title}</h1>
        <form>
        {
            questions.map((question, i) => <div key={i} className="App-row-flex" style={{justifyContent: 'flex-start'}}>
            <input type="checkbox" name={question.id} value={question.value} style={footerStyle.checkbox} /> &nbsp;
            <label>{question.name}</label><br />
            </div>)
        }
        <br />
        <input 
        type={'text'} 
        className='form-control' 
        placeholder='ENTER YOUR EMAIL ADDRESS' 
        style={footerStyle.input} 
        />
        <br />
        <button>Submit</button>
        </form>
        </>
    )
}
export default FeedBack