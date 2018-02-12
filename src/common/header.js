export const withFormValidation=(Component)=>(props){
    const errorLabel=props.meta.error?<span>
        {props.meta.error}
    </span>
    return(
        <Component {...props}>
            {errorLabel}
        </Component>
    );
}