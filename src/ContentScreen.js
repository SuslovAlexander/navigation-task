import classes from './ContentScreen.module.css'

const ContentScreen = ({content}) => {
    console.log(content.id);
    return (
        <div className={classes.content}>
            {content.content}
        </div>
    )
}

export default ContentScreen;