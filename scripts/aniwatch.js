import {videos} from "../data/video.js";
import {header} from "/scripts/header.js";

let videosHTML = "";
videos.forEach((video) => {
    videosHTML += `
        <div class="video-preview">
            <div class="thumbnail-row">
                <img class="thumbnail" src="${video.thumbnail}" alt="">
                <div class="subtitles">
                    <button class="sub-button"><img class="sub-img"  src="${video.sub_img}" alt=""></button> 
                    <button class="sub-num">3</button>
                    <button class="video-ep">3</button>
                </div>
                <div class="thumbnail-hover">
                    <h1 class="thumbnail-hover-heading">${video.thumbnail_hover_heading}</h1>
                    <div class="thumbnail-hover-rating"><img class="thumbnail-hover-img" src="./images/icons/star-solid.svg" alt="">${video.thumbnail_hover_rating_count}</div>
                    <button class="thumbnail-hover-HD">HD</button>
                    <button class="thumbnail-hover-ep-num">${video.thumbnail_hover_ep_num}</button>
                    <button class="thumbnail-hover-tv">TV</button>
                    <p class="thumbnail-hover-description">${video.thumbnail_hover_description}</p>
                    <div class="thumbnail-hover-information">
                        <p>Genre:</p><p style="color: white; margin: -40px 0 0 55px;"> Action,Adventure,Fantasy</p> 
                        <p style="margin-top: 2px;">Aired:</p><p style="color: white; margin: -40px 0 0 50px;">Sep 28, 2023</p>
                    </div>
                    <div class="thumbnail-hover-buttons">
                        <button class="thumbnail-hover-play-button"><img class="thumbnail-hover-play-icon" src="./images/icons/play-solid.svg" alt=""><p class="watch-now">Watch now</p></button>
                    </div>
                </div>
            </div>
            <div class="video-info-grid">
                <div class="video-info">
                    <p class="video-title">
                        ${video.video_title}
                    </p>
                    <p class="video-description">
                        ${video.video_description} 
                    </p>
                    <p class="video-stats">
                        ${video.video_stats}
                    </p>
                </div>
            </div>
        </div>
    `;
    // console.log(html);
})
console.log(videosHTML); 
document.querySelector(".js-video-grid").innerHTML = videosHTML;