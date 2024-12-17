export default function BelowCheese({title, ...props}) {
    return(
        <div {...props}>
        <div id="below-cheese-addbox">
            <span>{title}</span>
            <span>+</span>
        </div>
        </div>
    )
}