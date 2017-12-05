import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContentPage } from '../content/content';
import { Content } from "../../model/content.model";
// import { DashBoardPage } from '../dash-board/dash-board';
import { TrainingPage } from '../training/training';
import { ArchivePage } from '../archive/archive';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-dash-board',
  templateUrl: 'dash-board.html',
})
export class DashBoardPage {
  items: any;
  dashBoard: any;
  type:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dashBoard = "lr";
    this.type = navParams.data;
    // console.log(this.type);
    if(this.type == "DFF") {
      this.items = [
        {
          title: 'Smart Book 1',
          desc: '',
          video: '',
          edUrl: 'https://h5p.org/h5p/embed/151930',
          region: 'UBL Chittagong',
          date: '22 Dec 2017',
          thumbnail: 'https://api.adorable.io/avatars/121/abott@adorable.png'
        },
        {
          title: 'Smart Book 2',
          desc: '',
          video: '',
          edUrl: 'https://h5p.org/h5p/embed/151929',
          region: 'UBL Chittagong',
          date: '22 Dec 2017',
          thumbnail: 'https://api.adorable.io/avatars/121/abott@adorable.png'
        },
        {
          title: 'Brand Relaunch. What are all the considerations?',
          desc: 'When it becomes necessary to have a brand relaunch it has become quite evident to the marketing group that the brand is underperforming. Even if usage has increased the metric of comparing growth to a competitor’s success might illuminate a weakness.Experience tells me that this underperformance and market weakness is usually a result of insignificant meaning. For some reason, the brand is not resonating as strongly as it should and as a result the market performance is less than expected.Relaunching a brand is similar to rebranding. But rebranding has some built in bias in its very language. It turns out to be very similar in scope but it SOUNDS more drastic.It actually is not drastic. Point-in-fact  rebranding requires a relaunch and a brand relaunch requires some elements of rebranding.In our experience a weakness in brand meaning is often brought to a head through market research. Here are some of the signs that a brand relaunch is well overdue ana brand intervention is needed',
          video: '',
          edUrl: '',
          region: 'UBL Chittagong',
          date: '22 Dec 2017',
          thumbnail: 'https://api.adorable.io/avatars/121/abott@adorable.png'
        },
        {
          title: 'Top four reasons to consider a brand relaunch',
          desc: '<ul><li>The market research indicates quite clearly that the target audience cannot identify the brand&rsquo;s strategy clearly. Often they return a variety of meanings if the brand has any resonance to them at all. In other words, prospects are confused about the brand&rsquo;s promise and its valued position in their lives.</li><li>The research has uncovered a brand meaning that is highly emotional and resonant with the target audience but is not the meaning you claim. If this value position is not CLAIMED by any competitor in the category, it might be a smart move to reposition the brand to own that valuable space. When&nbsp;the brand meaning returned in the research reflects an erroneous value mentioned in point 1, you need to think about&nbsp;<a href="https://www.stealingshare.com/2016/01/12/electrolux-as-a-modern-idea/">brand repair</a>. If the brand returns a variety of values and none of them are negative or contrary to the new position a brand relaunch without brand repair may be in order.</li><li>If the research indicates that the market scape has significantly changed and while still valuable, the new opportunity is of higher emotional intensity than the old one, a change would be indicated.</li><li>A new competitor has entered the category and has reshaped the market scape into one that is particularly advantageous to their brand and places your legacy brand in a disadvantageous position. If true, you might want to consider a brand relaunch as well. No brand, regardless of it position in the category, can afford to ignore a sea change in the category for long. Remaining stationary while a new competitor reshapes opinions and preferences is a recipe for marketing disaster. The sooner your brand responds the better.</li></ul>',
          video: '',
          edUrl: '',
          region: 'UBL Chittagong',
          date: '22 Dec 2017',
          thumbnail: 'https://api.adorable.io/avatars/121/abott@adorable.png'
        },
        {
          title: 'Planning is important',
          desc: 'The elements of a relaunch require some&nbsp;<a href="https://www.stealingshare.com/pages/predicting-marketing-success/">well defined planning</a>.&nbsp;Tough questions must be asked and the resultant answers addressed. Too often in our experience, brands want to back into a new positioning&mdash; thinking that all they need isa new tag-line and color palette. But, the elements of success are broader than this.</p><p>Think about this marketing problem and subsequent brand opportunity logically. The first thing you need to do is to get those that have awareness of your brand (based upon the market research) is to recognize that something important has happened. That the brand HAS changed.</p><p>You may wish to do this on the cheap and change as little as possible but relaunching to a new improved position has requirements.',
          video: '',
          edUrl: '',
          region: 'UBL Chittagong',
          date: '22 Dec 2017',
          thumbnail: 'https://api.adorable.io/avatars/121/abott@adorable.png'
        },
        {
          title: 'Symbolism is key',
          desc: 'The new brand must be granted permission to occupy the new space in the mind of the prospect. It needs to demonstrate a new and important promise. It needs to have a singular clarity of purpose that is so powerful that no one in the target market can afford to ignore it. I used that language purposefully. When the new position is powerfully identified there will be a sense of risk in ignoring it. I&rsquo;m not talking about a new position that threatens the prospect, but think for a moment what it means to have a position that represents the highest emotional intensity in the category? When this emotional intensity is real and urgent it causes those that do not possess it to feel incomplete without it. There is inherent in this logic a sense of risk. A fear of risk is more descriptive of this phenomenon.',
          video: '',
          edUrl: '',
          region: 'UBL Chittagong',
          date: '22 Dec 2017',
          thumbnail: 'https://api.adorable.io/avatars/121/abott@adorable.png'
        },
        {
          title: 'Brand Anthropologists',
          desc: 'If you are successful in the brand building business, then you are a&nbsp;<a href="https://www.stealingshare.com/what_we_do/brand-anthropology/">brand anthropologist</a>and a student of human behavior.</p><p>Everything that you do and every inch of space that your brand occupies must be grounded in meaning. Communication without purpose is at its best unproductive and at its worst destructive. As a result of this axiom, extraneous messaging in defense of a brand must be eliminated.</p><p>Knowing what we do about human behavior we all recognize that FEAR is the strongest human motivator. I&rsquo;m not talking about bone chilling fear here just the understood consequence of ignorance on the part of the prospect (the ignoring of your brand).</p><p>It may be a simple a fear as being left out or not being in the know, but make no mistake about it&mdash; when positioning your brand for relaunch you need the target audience to fill in the blank. They need to implicitly understand the fear without your brand having to say it.',
          video: '',
          edUrl: '',
          region: 'UBL Chittagong',
          date: '22 Dec 2017',
          thumbnail: 'https://api.adorable.io/avatars/121/abott@adorable.png'
        },
        {
          title: 'Brand Relaunch requires an outside-in focus',
          desc: '<p>What this means is that your focus needs to be more on the beliefs,&nbsp;<a href="https://www.stealingshare.com/what_we_do/preceptive/">precepts</a>, needs and wants of the prospect rather than the needs and wants of current customers. I&rsquo;m not suggesting that you ignore current customers but you may enjoy greater flexibility in message with your current customers than believed.</p><p>Changing human behavior is not an easy task. That truth works both ways. It is difficult to dismiss a current customer through messaging alone. At some point, the brand would have to disappoint them in performance to actually lose them.</p><p>I would hope and fully expect, by the way, that you will find the new emotional brand promise to be resonant with current customers as well. But a focus on existing customers can be the kiss of death. A dance that ends in failure.</p><p>Often current customers are so wedded to your current brand message that they lack the ability to see outside of their own box. Their own subjective opinion is so overwhelming that any clarity they may possess will be clouded by experience. Don&rsquo;t worry about this as we have ways to test the risks among current customers that ensure that you have NOT thrown the baby out with the bathwater.</p>',
          video: '',
          edUrl: '',
          region: 'UBL Chittagong',
          date: '22 Dec 2017',
          thumbnail: 'https://api.adorable.io/avatars/121/abott@adorable.png'
        },
        {
          title: 'What needs to change?',
          desc: '<p>So ask yourself, what does the prospect need to know to change their mind and choose differently?</p><p>We already discussed that they need to SEE that something has changed in your brand. At a quick glance they MUST understand that the promise of the brand (the who it is for) is all about them personally.</p><p>Should your old logotype change? Probably. I might even say almost certainly. I know we hesitate to change logos because, if your brand involves a service or destination, it will require expensive signage changes. ROI is important here. But what is the cost of doing nothing</p><p>What is the cost of doing it on the cheap? The price of shortchanging your brand relaunch is almost certainly failure.</p><p>Do you expect a prospect to suddenly notice you and change preference when the external veneer of your brand has not changed? A new tagline is not enough to grant a new position. More often than not the prospect will not get far enough into your brand message to read it.</p><p>They have already decided that your brand is not important for them. You need to use every equity in your quiver to change that perception. At best you want them to say to themselves &ldquo;I think this is important enough to my self-description to trial the brand.&rdquo; At the very least you want them to say to themselves &ldquo;I overlooked this brand before and I should explore it a bit more deeply.&rdquo;</p>',
          video: '',
          edUrl: '',
          region: 'UBL Chittagong',
          date: '22 Dec 2017',
          thumbnail: 'https://api.adorable.io/avatars/121/abott@adorable.png'
        },
        {
          title: 'Change the Logo',
          desc: '<p>Most&nbsp;<a href="https://www.stealingshare.com/pages/an-inside-view-of-what-makes-a-logo-great/">logos</a>&nbsp;that I see are just cute pretty pictures. They were designed to be about identity and not a&nbsp;<a href="https://www.stealingshare.com/pages/where-is-your-marketing-advantage-influencing/">persuasive brand</a>. As such, they are usually about the brand itself. That ship has sailed.</p><p>Today we understand that the logo should work harder than that. It should symbolically reflect the brand strategy and position. They should see that logo and mark and understand the full brand promise.</p><p>It needs to be designed towards the strategy. If you are relaunching your brand or rebranding&mdash; odds are your mark either reflects your corporate identity OR an outdated prospect message. Either way it needs to go.</p><p>One of the most difficult paths to navigate is how to know what elements should stay or go. Color palette? Font? Imagery? Style? What do we need to reinforce and what NEEDS to change. Once again, we can find the answers to this in the market research conducted to identify the strategy.</p><p>The emotional brand theme should be locked with the new logo. The new logotype should never be seen without the brand strategic theme locked to it.</p><p>We call this the&nbsp;<a href="https://www.stealingshare.com/pages/st-jude-medical-brand/">logo lock-up</a>. You need to make sure that the brand is absolutely identified with the new highest emotional space. Leaving the logo to hang without the benefit of a theme is a waste of brand energy.</p>',
          video: '',
          edUrl: '',
          region: 'UBL Chittagong',
          date: '22 Dec 2017',
          thumbnail: 'https://api.adorable.io/avatars/121/abott@adorable.png'
        },
        {
          title: 'Make them FEEL as well as SEE',
          desc: '<p>The secret to brand relaunch success can be found in the intensity of its emotional importance. Emotional responses control purchase and loyalty permissions.</p><p>So it is important that the prospect not only SEE a change but FEEL it deeply. The form and substance of the relaunched brand needs to solute this emotional fiber. Keeping it simple. Making it clear.</p><p>Making it single-minded and having all meta messages in-line with the emotional position is a great predictor of success. Here are a list of brand relaunch caveats to avoid:</p><ol><li>Is your new brand cluttered?</li><li>Are you trying to say too many things?</li><li>Is the brand diluted through heritage messaging?</li><li>Are the brand&rsquo;s politics holding back the change?</li><li>Has not enough symbolism changed?</li><li>Is the theme just&nbsp;ad speak (is it too clever and sounds like an advertising tagline)?</li></ol>',
          video: '',
          edUrl: '',
          region: 'UBL Chittagong',
          date: '22 Dec 2017',
          thumbnail: 'https://api.adorable.io/avatars/121/abott@adorable.png'
        },
        {
          title: 'When is the time right to relaunch your brand?',
          desc: '<p>With the risk of stating the obvious, if you are reading this article then the writing might already be on the wall. It&rsquo;s time to call&nbsp;<a href="https://www.stealingshare.com/who_we_are/stealing_share_brand_company/rebranding-companies-we-are-experts/">rebranding companies</a>&nbsp;(and I have one in mind). If you are asking the question at all then the efficacy of the rebranding and relaunching effort should be explored. Great market&nbsp;research is the place to start.</p><p>You can find definitive answers to these questions. I&rsquo;m not being self-serving here when I tell you that all research is not equal and you need to trust such an important task to folks who know how to do it.</p><p>I say this because I firmly believe the price of clarity is the risk of offense. We know how to do this and most of&nbsp;<a href="https://www.stealingshare.com/what_we_do/top-branding-companies/">our&nbsp;competitors</a>&nbsp;don&rsquo;t.</p>',
          video: '',
          edUrl: '',
          region: 'UBL Chittagong',
          date: '22 Dec 2017',
          thumbnail: 'https://api.adorable.io/avatars/121/abott@adorable.png'
        }
      ];
    } else {
      this.items = [
        {
          title: 'Smart Book',
          desc: '',
          video: '',
          edUrl: 'https://h5p.org/h5p/embed/151930',
          region: 'UBL Chittagong',
          date: '22 Dec 2017',
          thumbnail: 'https://api.adorable.io/avatars/121/abott@adorable.png'
        },
        {
          title: 'Warehouse Management Policy and Procedures Guideline Outline',
          desc: '<p>1. INTRODUCTION (Stating purpose and scope of the warehousing function)<br />2. STAFFING NEEDS (Minimum and maximum requirements. Provide required skill sets and TOR&rsquo;s)<br />3. STORAGE FACILITIES Location and Site (Identify scenarios for different situations) Roofing and Flooring (Specify what is required) Utilities and Services (Identify the minimum standards required) Security ( For goods in all circumstances and staff in conflict environment) Access Office (Minimum standard)<br />4. ORGANIZATION of WAREHOUSE SPACE Layout Planning Operating Schedules Fire Safety First Aid Accessories Methods of Storage<br />5. DOCUMENTATION Mercy Corps Goods Received Note Mercy Corps Waybill Warehouse Register Stock Record Warehouse Bin Card Store Release Packing List<br />6. AUTHORITY and RESPONSIBILITIES Organisational structure Schedule of Responsibilities<br />7. RECEIPT of MATERIALS Responsibilities and Procedures Receiving Procedures Discrepancies<br />8. MATERIALS in STOCK Responsibilities and Procedures Items received &ldquo;damaged&rdquo; Broken packaging resulting in loss Stock Levels Requirements for special storage<br />9. MATERIALS in TRANSIT Documentation Management and movement requirements<br />10. DISPATCH / RELEASE of MATERIALS Responsibilities and Procedures Collected Materials Delivered Materials Materials on Loan Operational Stock Returned Materials Consumables Gate Pass<br />11. INVENTORY CONTROL<br />Source: Mercy Corps - Warehouse Management<br />Policy and Procedures Guideline - 2006<br />Carrying out an Inventory Check Stock Level Adjustments Purpose Procedure Removal of Items from Inventory<br />12. DATA MANAGEMENT / FILING Procedure (Outline)<br />13. REPORTING Disposal reports Monthly or weekly or by-weekly inventory reports Damage reports<br />14. WAREHOUSE INSPECTIONS Schedule Responsibilities and Procedures<br />15. APPENDICES Format of documents and templates</p>',
          video: '',
          edUrl: '',
          region: 'UBL Chittagong',
          date: '22 Dec 2017',
          thumbnail: 'https://api.adorable.io/avatars/121/abott@adorable.png'
        },
      ]; 
    }
    
  }


  ionViewDidLoad() {
    this.dashBoard = "lr";
  }

  content(item: Content) {
    this.navCtrl.push(ContentPage, {item});
  }


  training() {
    this.navCtrl.push(TrainingPage, this.type);
  }

  archive() {
    this.navCtrl.push(ArchivePage, this.type);
  }

  home() {
    this.navCtrl.setRoot(HomePage);
  }

}
