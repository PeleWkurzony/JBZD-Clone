import { Link } from 'react-router-dom';
import defaultPhoto from '../../../public/Images/default.jpg';
import addSpearImage from '../../../public/Images/Coins/btn_coins.png';
import goldSpearImage from '../../../public/Images/Coins/gold.png';
import silverSpearImage from '../../../public/Images/Coins/silver.png';
import stoneSpearImage from '../../../public/Images/Coins/stone.png';
import coinImage from '../../../public/Images/Coins/coin.png';
import { useState } from 'react';

/* 
    Component that takes one parameter { time } and calculates that post was published e.g. "34 sec." ago or "2 weeks" ago
    return simple text
*/
const CalculateTime = ({ time }) => {
    // TODO

    return (
        <span className="article-info-time">
            5 godz.
        </span>
    )
}

const ArticleContainer = ({ text, image, video }) => {
    
    let textArticle = null;
    let imageArticle = null;
    let videoArticle = null;

    if (text !== null) {
        textArticle = <div className="text-article-content"> {text} </div>;
    }
    if (image !== null) {
        imageArticle = <img className="image-article-content" src={image} alt="" />;
    }
    if (video !== null) {
        videoArticle = <video className="video-article-content" controls src={video} />;
    }
    
    return (
        <>
            {videoArticle ?  videoArticle : null}
            {imageArticle ? imageArticle : null}
            {textArticle ? textArticle : null}
        </>
    )
}

const Badge = ({photo, ammount}) => {
    if (ammount !== 0) {
        return <span> <img src={photo} alt="" /> {ammount} </span>
    }
}

const PrizeAuthorButton = (prizeAuthor) => {

    const [collapsed, setCollapsed] = useState(true);

    if (collapsed === true) {
        return (
            <button id="add-spear" onClick={() => {setCollapsed(false)}}> 
                <i className="bi bi-caret-up-fill"></i>
                <img src={addSpearImage} alt="" />
            </button>
        )
    } else {
        return (
            <>            
                <div className="article-controls-badge-buttons">
                    <button className="btn spear-btn" onClick={() => { prizeAuthor('gold') }}> 
                        <img className="article-controls-big-image" src={goldSpearImage} alt=""/> 
                        <div className="spear-value"> 
                            <div className="spear-value-text"> 1000 <img className="article-controls-small-image" src={coinImage} alt="" /> </div>
                        </div>
                    </button>

                    <button className="btn spear-btn" onClick={() => { prizeAuthor('silver') }}> 
                        <img className="article-controls-big-image" src={silverSpearImage} alt=""/> 
                        <div className="spear-value"> 
                            <div className="spear-value-text"> 400 <img className="article-controls-small-image" src={coinImage} alt="" /> </div>
                        </div>
                    </button>

                    <button className="btn spear-btn" onClick={() => { prizeAuthor('stone') }}> 
                        <img className="article-controls-big-image" src={stoneSpearImage} alt=""/> 
                        <div className="spear-value"> 
                            <div className="spear-value-text"> 100 <img className="article-controls-small-image" src={coinImage} alt="" /> </div>
                        </div>
                    </button>
                </div>
                <button id="add-spear" onClick={() => {setCollapsed(true)}}> 
                    <i className="bi bi-caret-down-fill"></i>
                    <img src={addSpearImage} alt="" />
                </button>
            </>
        )
    }

    
}

export const PostComponent = ({ postDetails, prizeAuthor }) => {

    return (
        <article className="article">
            <div className="article-left">
                <Link className="article-user-photo" to={`/users/${postDetails.author_id}` } >
                    <img src={
                        (postDetails.author_photo ? postDetails.author_photo : defaultPhoto)
                    } alt="" />
                </Link>
            </div>
            <div className="article-right">
                <div className="article-content">
                    <div className="article-title">
                        <Link to={`/post/${postDetails.post_id}`}>
                            <div className="article-title-text">
                                {postDetails.title} 
                            </div>
                        </Link>
                        <div className="article-title-badges">
                            <Badge photo={goldSpearImage} ammount={postDetails.gold_badges} />
                            <Badge photo={silverSpearImage} ammount={postDetails.silver_badges} />
                            <Badge photo={stoneSpearImage} ammount={postDetails.stone_badges} />
                        </div>
                    </div>
                    <div className="article-detail"> 
                        <div className="article-info">
                            {postDetails.category} przez <Link to={`/users/${postDetails.author_id}`}> {postDetails.author_name} </Link> <CalculateTime time={postDetails.publish_date} />
                        </div>
                        <div className="article-comments-number">
                            <i className="bi bi-chat-fill"></i> {postDetails.comments_number}
                        </div>
                    </div>
                    <div className="article-container">
                        <ArticleContainer
                            text={postDetails.text ? postDetails.text : null}
                            image={postDetails.image ? postDetails.image : null}
                            video={postDetails.video ? postDetails.video : null} />
                    </div>
                </div>
                <div className="article-controls">
                    <button id="report-button"> <i className="bi bi-flag-fill"></i> </button>
                    <PrizeAuthorButton prizeAuthor={null}/>
                    <button id="favorite-button"> <i className="bi bi-star-fill"></i> </button>
                    <button id="plus-button"> <b> +{postDetails.plus} </b> </button>
            </div>
            </div>
        </article>
    )

}