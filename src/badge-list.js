import "./p3-card.js";
import { LitElement, html, css } from 'lit';

class BadgeList extends LitElement{
    static get tag() {
        return 'badge-list';
    }

    static get properties()
    {
        return {
            types: { type: Array},
            badges: {type: Array},
            name: {type:String},
            image:{type:String},
            logo:{type:String},
            summary:{type:String},
            header: {type:String}
        };
    }

       
    static get styles() {
        return css`
        :host {
            display: block;
            padding: 25px;
        }
        .wrapper {
            width: 340px;
        height: 258px;
        position: relative;
        }
        .card {
            display: inline-flex;
        }
        .logo {
            width:30px;
            height:30;
            position: absolute;
        bottom: 0px;
        right: 0px;
        z-index: 2;
        }
        
    p3-card{
      margin: 10px;
      padding: 10px;
    }

      
    `;
    }

    constructor() {

        super();
        this.badges=[
            {
                "name": "Topher",
                "image": "https://i.kym-cdn.com/entries/icons/mobile/000/043/203/tophercover.jpg",
                "logo": "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/0d/ee/1d/0dee1d6f-a954-20b6-c452-6f3fa8b8eac0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg",
                "summary": "interesting fella", 
                "header": "Topher"
                
    
            },
    
            {
                "name": "Bryce",
                "image": "av:games",
                "logo": "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/0d/ee/1d/0dee1d6f-a954-20b6-c452-6f3fa8b8eac0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg",
                "summary": "https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html", 
                "header": "Joshua Hantman"
                
    
            },
            {
                "name": "Sketchy Bryce",
                "image": "",
                "logo": "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/0d/ee/1d/0dee1d6f-a954-20b6-c452-6f3fa8b8eac0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg",
                "summary": "https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html", 
                "header": "Joshua Hantman"
                
    
            },
            {
                "name": "Shrek",
                "image": "https://preview.redd.it/nvaxpuqwius41.jpg?auto=webp&s=803366717450b2e1afd8d216545578278a7b4564",
                "logo": "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/0d/ee/1d/0dee1d6f-a954-20b6-c452-6f3fa8b8eac0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg",

                "summary": "https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html", 
                "header": "Joshua Hantman", 
                
    
    
            },
            {
                "name": "Leon S Kennedy",
                "image": "https://www.bing.com/images/search?view=detailV2&ccid=APPtDRBj&id=42DFD3541327422875BE942F03A505192BDA820B&thid=OIP.APPtDRBjuOHyvx8EmbySKQHaEK&mediaurl=https%3a%2f%2fwww.vytukej.cz%2fwp-content%2fuploads%2f2018%2f07%2fleon.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.00f3ed0d1063b8e1f2bf1f0499bc9229%3frik%3dC4LaKxkFpQMvlA%26pid%3dImgRaw%26r%3d0&exph=1080&expw=1920&q=leon+kennedy+resident+evil+4+remake&simid=607986530011793092&FORM=IRPRST&ck=7608743469EE822AD9554544B3818916&selectedIndex=14&ajaxhist=0&ajaxserp=0",
                "logo": "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/0d/ee/1d/0dee1d6f-a954-20b6-c452-6f3fa8b8eac0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg",
                "summary": "Bingo enthusiest", 
                "header": "Leon Skennedy", 
                
    
            },
    
        ];
    
        this.logo= new URL('../assets/logo.PNG', import.meta.url).href;
        this.image= new URL('../assets/Capture.PNG', import.meta.url).href;

    }

    render() {
        return html`
        <div class="wrapper">
        ${this.badges.map(
              badge => html`
                <div class="card">
                    <p3-card
                        name="${badge.name}"
                        image="${badge.image}" 
                        summary="${badge.summary}"
                        logo="${badge.logo}"
                        header="${badge.header}"> 
                    </p3-card> 
                </div>
              `)}
        </div>
        
        `;
    }


    }

customElements.define('badge-list', BadgeList);
