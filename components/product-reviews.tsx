'use client'

import { useState, useEffect } from 'react'

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ThumbsUp, ThumbsDown} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from '@/components/ui/scroll-area'
// import Image from "next/image"
import oto_p_review from './oto_ear_sort_with_refe_p.json'
import oto_n_review from './oto_ear_sort_with_refe_n.json'
import onnshitsu_p_review from './onnshitsu_ear_sort_with_refe_p.json'
import onnshitsu_n_review from './onnshitsu_ear_sort_with_refe_n.json'
import nedann_p_review from './nedann_ear_sort_with_refe_p.json'
import nedann_n_review from './nedann_ear_sort_with_refe_n.json'
import setsuzoku_p_review from './setsuzoku_ear_sort_with_refe_p.json'
import setsuzoku_n_review from './setsuzoku_ear_sort_with_refe_n.json'
import jyunndenn_p_review from './jyunndenn_ear_sort_with_refe_p.json'
import jyunndenn_n_review from './jyunndenn_ear_sort_with_refe_n.json'
import tsukai_p_review from './tsukai_ear_sort_with_refe_p.json'
import tsukai_n_review from './tsukai_ear_sort_with_refe_n.json'
import seinou_p_review from './seinou_ear_sort_with_refe_p.json'
import seinou_n_review from './seinou_ear_sort_with_refe_n.json'
import tsuwa_p_review from './tsuwa_ear_sort_with_refe_p.json'
import tsuwa_n_review from './tsuwa_ear_sort_with_refe_n.json'
import misuto_p_review from './misuto_p.json'
import misuto_n_review from './misuto_n.json'
import oto_p_hum_review from './oto_p.json'
import oto_n_hum_review from './oto_n.json'
import kashitsu_p_review from './kashitsu_p.json'
import kashitsu_n_review from './kashitsu_n.json'
import kannsou_p_review from './kannsou_p.json'
import kannsou_n_review from './kannsou_n.json'
import shinnshitsu_p_review from './shinnshitsu_p.json'
import shinnshitsu_n_review from './shinnshitsu_n.json'
import joki_p_review from './joki_p.json'
import joki_n_review from './joki_n.json'
import nedann_humidifier_p_review from './nedann_p.json'
import nedann_humidifier_n_review from './nedann_n.json'
import shiyou_p_review from './shiyou_p.json'
import shiyou_n_review from './shiyou_n.json'

import less_review_p_oto_earphone from './96_less_oto_ear_sort_with_refe_p.json'
import less_review_n_oto_earphone from './96_less_oto_ear_sort_with_refe_n.json'
import less_review_p_onnshitsu_earphone from './96_less_onnshitsu_ear_sort_with_refe_p.json'
import less_review_n_onnshitsu_earphone from './96_less_onnshitsu_ear_sort_with_refe_n.json'
import less_review_p_nedann_earphone from './96_less_nedann_ear_sort_with_refe_p.json'
import less_review_n_nedann_earphone from './96_less_nedann_ear_sort_with_refe_n.json'
import less_review_p_saizu_earphone from './96_less_saizu_ear_sort_with_refe_p.json'
import less_review_n_saizu_earphone from './96_less_saizu_ear_sort_with_refe_n.json'

import less_review_p_kyusui_humidifier from './10016923_kyusui_ear_sort_with_refe_p.json'
import less_review_n_kyusui_humidifier from './10016923_kyusui_ear_sort_with_refe_n.json'
import less_review_p_heya_humidifier from './10016923_heya_ear_sort_with_refe_p.json'
import less_review_n_heya_humidifier from './10016923_heya_ear_sort_with_refe_n.json'
import less_review_p_nedann_humidifier from './10016923_nedann_ear_sort_with_refe_p.json'
import less_review_n_nedann_humidifier from './10016923_nedann_ear_sort_with_refe_n.json'
import less_review_p_teire_humidifier from './10016923_teire_ear_sort_with_refe_p.json'
import less_review_n_teire_humidifier from './10016923_teire_ear_sort_with_refe_n.json'
// import Modal from "react-modal"


const categories = ["イヤホン","加湿器"] as const;
const products = {
  "イヤホン": ["QCY-T1C完全ワイヤレスイヤホン第3/4世代","AAC進化版ワイヤレスイヤホン"],
  "加湿器": ["小型加湿器S08","エルズ ヒュミディファイアー"],
} as const;

const reviews = {
  "QCY-T1C完全ワイヤレスイヤホン第3/4世代": {
    positive: "このイヤホンは、コストパフォーマンスに優れた製品です。音質はクリアで聴きやすいものの、低音や奥行きには欠けるとの意見もありますが、価格を考えれば満足度は高いです。接続も簡単で、毎日の通学時に重宝しています。充電の持ちも良好で、ハイテク機能が満載です。通話も問題なく行えるため、音楽以外の使用でも十分に使えます。また、購入時にポイントが付くことで、よりお得に買える点も評価されています。全体的に、性能は価格相応ですが、使い勝手の良さが際立つ製品です。",
    negative: "音質自体は悪くないものの、いくつかの問題が報告されています。購入から一ヶ月以内に左耳の接続が不良となり、充電持続時間が最大でも2〜3時間に制限されました。さらに、充電器にセットしてもフル充電にならず、残量が20〜30%で止まる現象があり、これが初期不良とされて商品交換が行われました。また、価格に対して扱いやすさや使い勝手は良いものの、磁力が強く、取り扱いに苦労する点も指摘されています。音楽の音質は良いが、通話品質は普通という意見もありました。"
  },
  "小型加湿器S08": {
    positive: "この加湿器は、注文翌日に届き、ミストの量が多くて気持ち良いと好評です。サイズは小さいですが、持ち運びに便利で、音も静かなので仕事中でも使いやすいとのこと。値段も手頃で、特に一人での使用に適しています。細かいミストでしっかり加湿でき、デザインも可愛く、コンパクトなため狭い部屋や車での使用に向いています。ただし、加湿効果の実感には個人差があるようです。全体的に買って良かったという評価です。",
    negative: "使用開始から数回でミストが出なくなり、コストパフォーマンスに疑問を感じていることが述べられています。加湿器の音は静かで、加湿量も多いため、寝室での使用には向いていると評価されていますが、加湿効果が弱く、ボタンを長時間押し続けてもミストが出ないことに不満を抱いています。値段相応とも感じている一方、故障さえしなければ長期間使用できることに期待を寄せています。全体的に、品質や耐久性に対する懸念が強調されています。"
  },
  "AAC進化版ワイヤレスイヤホン": {
    positive: "このイヤホンは、音がこもらずクリアで、細かい音もしっかりと聞こえるため、音質に満足しています。また、リーズナブルな価格で使いやすく、非常に満足しています。",
    negative: "このイヤホンは音質と音量調整の精度が高く、値段に見合った品質です。音の途切れもなく、安定しています。ただし、イヤーピースのサイズ展開は良いものの、本体の大きさも考慮する必要があると感じました。"
  },
  "エルズ ヒュミディファイアー": {
    positive: "この加湿器は手入れが簡単で、上から給水できる便利さが好評です。また、シンプルなデザインが部屋に自然に馴染みやすい点も評価されています。",
    negative: "この加湿器はシンプルなデザインでインテリアにも馴染み、大容量でタッチパネルやミスト調節が可能な点が評価されていますが、使用開始時に給水タンクの不具合が発生し、本体下部から水が漏れて床が水浸しになるトラブルがありました。その後交換対応で問題は解消され、現在は安定して使用できています。"
  },
  "Blender": {
    positive: "Efficient and easy to clean.",
    negative: "A bit noisy during operation."
  }
}

// const images ={
//   "QCY-T1C完全ワイヤレスイヤホン第3/4世代": 
//   [
//    require("./product_image/rakuten_earphone_1.jpg"),
//    require("./product_image/rakuten_earphone_2.jpg"),
//    require("./product_image/rakuten_earphone_3.jpg"),
//   ],
// };

export function ProductReviewsComponent() {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>(undefined);
  const [selectedAspect, setselectedAspect]=useState<string| undefined>(undefined);
  const [showDetails,setShowDetails]=useState(false);
  const [PositiveData,setPositiveData]=useState<string[]>([]);
  const [PositiveReferences,setPositiveReference]=useState<number[]>([]);
  const [NegativeData,setNegativeData]=useState<string[]>([]);
  const [NegativeReferences,setNegativeReference]=useState<number[]>([]);
  const [ClickReceive,setClickReceive]=useState(false);
  const [PReviews,setPositiveReviews]=useState<string[]>([]);
  const [NReviews,setNegativeReviews]=useState<string[]>([]);
  // const [isOpen, setIsOpen] = useState(false);
  // const [selectedImage, setSelectedImage] = useState('');

  const [expandedIndices, setExpandedIndices] = useState<Record<string, Record<number, boolean>>>({});
  const [expandedRightIndices, setRightExpandedIndices] = useState<Record<string, Record<number, boolean>>>({});

  const toggleExpand = (aspect: string | undefined, index: number) => {
    if (!aspect) return; // 如果 aspect 未定义，直接返回
    setExpandedIndices((prev) => ({
      ...prev,
      [aspect]: {
        ...prev[aspect],
        [index]: !prev[aspect]?.[index], // 切换指定观点和索引的状态
      },
    }));
  };
  const toggleRightExpand = (aspect: string | undefined, index: number) => {
    if (!aspect) return; // 如果 aspect 未定义，直接返回
    setRightExpandedIndices((prev) => ({
      ...prev,
      [aspect]: {
        ...prev[aspect],
        [index]: !prev[aspect]?.[index], // 切换指定观点和索引的状态
      },
    }));
  };


  useEffect(() => {
    if (selectedCategory) {
      setSelectedProduct(products[selectedCategory as keyof typeof products][0]); // Type assertion
    }
  }, [selectedCategory]);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setShowDetails(false);
    setClickReceive(false);
  };


  // const openModal = (image:string) => {
  //   setSelectedImage(image);
  //   setIsOpen(true);
  // };

  // const closeModal = () => {
  //   setIsOpen(false);
  //   setSelectedImage('');
  // };

  const handleProductChange = (value: string) => {
    setSelectedProduct(value);
    setShowDetails(false);
    setClickReceive(false);
  };
  
  const buttonClick=(value:string,isDetailVisible: boolean)=>{
    setselectedAspect(value);
    setClickReceive(isDetailVisible)
  };
  const handleShowDetails=(isDetailVisible: boolean)=>{
    setShowDetails(isDetailVisible)
    setselectedAspect(undefined)
  }
  const handleReviewshow =(reviews:string[],references:number[],reviews2:string[],references2:number[])=>{
    setPositiveData(reviews);
    setPositiveReference(references);
    setNegativeData(reviews2);
    setNegativeReference(references2);
  }
  const Reviews=(Previews:string[],Nreviews:string[])=>{
    setPositiveReviews(Previews)
    setNegativeReviews(Nreviews)
  }
 


  const calculateKength=(Reviews:string[])=>{
    return Reviews.length
  }

  const renderReviewWithRedHighlight = (review:string) => {
    const sentences = review.split(/(?<=。)/);
    return (
      <div>
        {sentences.map((sentence, index) => (
            <span key={index} className={selectedAspect && sentence.includes(selectedAspect) ? "bg-red-500 text-white":""}>
            {sentence}{' '}
          </span>
        ))}
      </div>
    );
  };
 
  const renderReviewWithBlueHighlight = (review:string) => {
    const sentences = review.split(/(?<=。)/);
    return (
      <div>
        {sentences.map((sentence, index) => (
            <span key={index} className={selectedAspect && sentence.includes(selectedAspect) ? "bg-blue-500 text-white" : ''}>
            {sentence}{' '}
          </span>
        ))}
      </div>
    );
  };


  const showReviewWithclickaspect = (review: string) => {
    const sentences = review.split(/(?<=。)/);
    const filteredSentences = sentences.filter(sentence => 
      selectedAspect && sentence.includes(selectedAspect)
    );
  
    return (
      <div>
        {filteredSentences.map((sentence, index) => (
          <span key={index}>
            {sentence}{' '}
          </span>
        ))}
      </div>
    );
  };



  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <Select onValueChange={handleCategoryChange} value={selectedCategory}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="商品ジャンル" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select onValueChange={handleProductChange} value={selectedProduct} disabled={!selectedCategory}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="商品名" />
            </SelectTrigger>
            <SelectContent>
              {selectedCategory && products[selectedCategory as keyof typeof products].map((product) => (
                <SelectItem key={product} value={product}>
                  {product}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        

    <div> 
        {/* <div className='flex justify-center items-center mb-4'>
            {selectedProduct === "QCY-T1C完全ワイヤレスイヤホン第3/4世代" && images[selectedProduct]?.map((image, index) => (
            <Image 
            key={index} 
            src={image} 
            alt={`Product Image ${index + 1}`}
            className="w-48 h-48 object-cover cursor-pointer" 
            onClick={()=>openModal(image)}/>
            
          ))}
       </div> */}

       {/* <Modal isOpen={isOpen} onRequestClose={closeModal} className="modal">
        <Image src={selectedImage} alt="Selected Product" className="max-w-[50%] max-h-[50%]" style={{width:'50%',height:'50%'}}/>
        <button onClick={closeModal} className='absolute top-4 right-4 text-white bg-gray-800 rounded p-2'>
          Close
        </button>
      </Modal> */}
    </div>

     

        {selectedProduct && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ThumbsUp className="mr-2 text-red-500" />
                  ポジティブなレビュー要約
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{reviews[selectedProduct as keyof typeof reviews]?.positive || "No positive review available."}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ThumbsDown className="mr-2 text-blue-500" />
                  ネガティブレビュー要約
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{reviews[selectedProduct as keyof typeof reviews]?.negative || "No negative review available."}</p>
              </CardContent>
            </Card>
          </div>
        )}
        
          {selectedProduct && (
          <div className="text-center">
            <Button size="lg" onClick={()=>handleShowDetails(true)}>もっと見る</Button>
        </div>
        )}
        <div className="my-4"></div>

        <div className="flex justify-center space-x-4 mb-1">
          {showDetails&&selectedProduct === "QCY-T1C完全ワイヤレスイヤホン第3/4世代"&& (
            <div className='flex flex-wrap justify-center'>
              <button
               className="rounded-full py-2 px-4 bg-red-500 text-white"
               title="positive:228 negative:127"
               onClick={()=>{
               buttonClick("音",true)
               Reviews(oto_p_review.reviews,oto_n_review.reviews)
               handleReviewshow(oto_p_review.reviews,oto_p_review.reference,oto_n_review.reviews,oto_n_review.reference)  
              }
               }
              >
                音
              </button>

              
           <button
              className="rounded-full py-2 px-4 bg-red-500 text-white " 
              title='positive:279 negative:51'
              onClick={() => {
                buttonClick("音質",true)
                Reviews(onnshitsu_p_review.reviews,onnshitsu_n_review.reviews)
                handleReviewshow(onnshitsu_p_review.reviews,onnshitsu_p_review.reference,onnshitsu_n_review.reviews,onnshitsu_n_review.reference)
              }}>
              音質
            </button>

            <button
              className="rounded-full py-2 px-4 bg-red-500  text-white" 
              title='positive:160 negative:21'
              onClick={() => {
                buttonClick("値段",true)
                Reviews(nedann_p_review.reviews,nedann_n_review.reviews)
                handleReviewshow(nedann_p_review.reviews,nedann_p_review.reference,nedann_n_review.reviews,nedann_n_review.reference)
              }}>
              値段
            </button>

            <button
              className="rounded-full py-2 px-4 bg-red-500  text-white" 
              title='positive:83 negative:15'
              onClick={() => {
                buttonClick("接続",true)
                Reviews(setsuzoku_p_review.reviews,setsuzoku_n_review.reviews)
                handleReviewshow(setsuzoku_p_review.reviews,setsuzoku_p_review.reference,setsuzoku_n_review.reviews,setsuzoku_n_review.reference)
              }}>
              接続
            </button>

            <button
              className="rounded-full py-2 px-4 bg-red-500  text-white" 
              title='positive:51 negative:0'
              onClick={() => {
                buttonClick("使い勝手",true)
                Reviews(tsukai_p_review.reviews,tsukai_n_review.reviews)
                handleReviewshow(tsukai_p_review.reviews,tsukai_p_review.reference,tsukai_n_review.reviews,tsukai_n_review.reference)
              }}>
              使い勝手
            </button>

            <button
              className="rounded-full py-2 px-4 bg-red-500  text-white" 
              title='positive:22 negative:0'
              onClick={() => {
                buttonClick("性能",true)
                Reviews(seinou_p_review.reviews,seinou_n_review.reviews)
                handleReviewshow(seinou_p_review.reviews,seinou_p_review.reference,seinou_n_review.reviews,seinou_n_review.reference)
              }}>
              性能
            </button>

            <button
              className="rounded-full py-2 px-4 border boder-while" 
              title='positive:38 negative:28'
              onClick={() => {
                buttonClick("充電",true)
                Reviews(jyunndenn_p_review.reviews,jyunndenn_n_review.reviews)
                handleReviewshow(jyunndenn_p_review.reviews,jyunndenn_p_review.reference,jyunndenn_n_review.reviews,jyunndenn_n_review.reference)
              }}>
              充電
            </button>

            <button
              className="rounded-full py-2 px-4 border boder-while " 
               title='positive:11 negative:8'
              onClick={() => {
                buttonClick("通話",true)
                Reviews(tsuwa_p_review.reviews,tsuwa_n_review.reviews)
                handleReviewshow(tsuwa_p_review.reviews,tsuwa_p_review.reference,tsuwa_n_review.reviews,tsuwa_n_review.reference)
              }}>
              通話
            </button>
            </div> )}

            {showDetails&&selectedProduct === "小型加湿器S08"&& (
              <div className='flex flex-wrap justify-center'>

                <button
                className="rounded-full py-2 px-4 bg-red-500  text-white"
                title="positive:115 negative:17"
                onClick={()=>{
                buttonClick("ミスト",true)
                Reviews(misuto_p_review.reviews,misuto_n_review.reviews)
                handleReviewshow(misuto_p_review.reviews,misuto_p_review.reference,misuto_n_review.reviews,misuto_n_review.reference)  
                }
                }
                >
                  ミスト
                </button>

                <button
                className="rounded-full py-2 px-4 bg-red-500 text-white"
                title="positive:82 negative:35"
                onClick={()=>{
                buttonClick("音",true)
                Reviews(oto_p_hum_review.reviews,oto_n_hum_review.reviews)
                handleReviewshow(oto_p_hum_review.reviews,oto_p_hum_review.reference,oto_n_hum_review.reviews,oto_n_hum_review.reference)  
                }
                }
                >
                  音
                </button>

                <button
                className="rounded-full py-2 px-4 bg-red-500 text-white"
                title="positive:34 negative:4"
                onClick={()=>{
                buttonClick("値段",true)
                Reviews(nedann_humidifier_p_review.reviews,nedann_humidifier_n_review.reviews)
                handleReviewshow(nedann_humidifier_p_review.reviews,nedann_humidifier_p_review.reference,nedann_humidifier_n_review.reviews,nedann_humidifier_n_review.reference)  
                }
                }
                >
                  値段
                </button>

                <button
                className="rounded-full py-2 px-4 bg-red-500 text-white"
                title="positive:32 negative:6"
                onClick={()=>{
                buttonClick("加湿",true)
                Reviews(kashitsu_p_review.reviews,kashitsu_n_review.reviews)
                handleReviewshow(kashitsu_p_review.reviews,kashitsu_p_review.reference,kashitsu_n_review.reviews,kashitsu_n_review.reference)  
                }
                }
                >
                  加湿
                </button>

                <button
                className="rounded-full py-2 px-4 bg-red-500 text-white"
                title="positive:17 negative:9"
                onClick={()=>{
                buttonClick("蒸気",true)
                Reviews(joki_p_review.reviews,joki_n_review.reviews)
                handleReviewshow(joki_p_review.reviews,joki_p_review.reference,joki_n_review.reviews,joki_n_review.reference)  
                }
                }
                >
                   蒸気
                </button>

                <button
                className="rounded-full py-2 px-4 bg-red-500 text-white"
                title="positive:6 negative:2"
                onClick={()=>{
                buttonClick("使用",true)
                Reviews(shiyou_p_review.reviews,shiyou_n_review.reviews)
                handleReviewshow(shiyou_p_review.reviews,shiyou_p_review.reference,shiyou_n_review.reviews,shiyou_n_review.reference)  
                }
                }
                >
                    使用
                </button>

                <button
                className="rounded-full py-2 px-4 bg-red-500 text-white"
                title="positive:6 negative:0"
                onClick={()=>{
                buttonClick("寝室",true)
                Reviews(shinnshitsu_p_review.reviews,shinnshitsu_n_review.reviews)
                handleReviewshow(shinnshitsu_p_review.reviews,shinnshitsu_p_review.reference,shinnshitsu_n_review.reviews,shinnshitsu_n_review.reference)  
                }
                }
                >
                   寝室
                </button>

                <button
                className="rounded-full py-2 px-4 bg-blue-500 text-white"
                title="positive:5 negative:21"
                onClick={()=>{
                buttonClick("乾燥",true)
                Reviews(kannsou_p_review.reviews,kannsou_n_review.reviews)
                handleReviewshow(kannsou_p_review.reviews,kannsou_p_review.reference,kannsou_n_review.reviews,kannsou_n_review.reference)  
                }
                }
                >
                     乾燥
                </button>

              
              </div>)}
            {showDetails&&selectedProduct === "AAC進化版ワイヤレスイヤホン"&& (
            <div className='flex flex-wrap justify-center'>
              <button
               className="rounded-full py-2 px-4 bg-red-500 text-white"
               title="positive:16 negative:9"
               onClick={()=>{
               buttonClick("音",true)
               Reviews(less_review_p_oto_earphone.reviews,less_review_n_oto_earphone.reviews)
               handleReviewshow(less_review_p_oto_earphone.reviews,less_review_p_oto_earphone.reference,less_review_n_oto_earphone.reviews,less_review_n_oto_earphone.reference)  
              }
               }
              >
                音
              </button>

              
           <button
              className="rounded-full py-2 px-4 bg-red-500 text-white " 
              title='positive:22 negative:2'
              onClick={() => {
                buttonClick("音質",true)
                Reviews(less_review_p_onnshitsu_earphone.reviews,less_review_n_onnshitsu_earphone.reviews)
                handleReviewshow(less_review_p_onnshitsu_earphone.reviews,less_review_p_onnshitsu_earphone.reference,less_review_n_onnshitsu_earphone.reviews,less_review_n_onnshitsu_earphone.reference)
              }}>
              音質
            </button>

            <button
              className="rounded-full py-2 px-4 bg-red-500  text-white" 
              title='positive:9 negative:1'
              onClick={() => {
                buttonClick("値段",true)
                Reviews(less_review_p_nedann_earphone.reviews,less_review_n_nedann_earphone.reviews)
                handleReviewshow(less_review_p_nedann_earphone.reviews,less_review_p_nedann_earphone.reference,less_review_n_nedann_earphone.reviews,less_review_n_nedann_earphone.reference)
              }}>
              値段
            </button>

            <button
              className="rounded-full py-2 px-4 bg-blue-500  text-white" 
              title='positive:0 negative:2'
              onClick={() => {
                buttonClick("サイズ",true)
                Reviews(less_review_p_saizu_earphone.reviews,less_review_n_saizu_earphone.reviews)
                handleReviewshow(less_review_p_saizu_earphone.reviews,less_review_p_saizu_earphone.reference,less_review_n_saizu_earphone.reviews,less_review_n_saizu_earphone.reference)
              }}>
              サイズ
            </button>
            </div>)}
            {showDetails&&selectedProduct === "エルズ ヒュミディファイアー"&& (
            <div className='flex flex-wrap justify-center'>
              <button
               className="rounded-full py-2 px-4 bg-red-500 text-white"
               title="positive:19 negative:0"
               onClick={()=>{
               buttonClick("手入れ",true)
               Reviews(less_review_p_teire_humidifier.reviews,less_review_n_teire_humidifier.reviews)
               handleReviewshow(less_review_p_teire_humidifier.reviews,less_review_p_teire_humidifier.reference,less_review_n_teire_humidifier.reviews,less_review_n_teire_humidifier.reference)  
              }
               }
              >
              手入れ
              </button>

              
           <button
              className="rounded-full py-2 px-4 bg-red-500 text-white " 
              title='positive:12 negative:1'
              onClick={() => {
                buttonClick("給水",true)
                Reviews(less_review_p_kyusui_humidifier.reviews,less_review_n_kyusui_humidifier.reviews)
                handleReviewshow(less_review_p_kyusui_humidifier.reviews,less_review_p_kyusui_humidifier.reference,less_review_n_kyusui_humidifier.reviews,less_review_n_kyusui_humidifier.reference)
              }}>
              給水
            </button>

            <button
              className="rounded-full py-2 px-4 bg-blue-500  text-white" 
              title='positive:0 negative:2'
              onClick={() => {
                buttonClick("値段",true)
                Reviews(less_review_p_nedann_humidifier.reviews,less_review_n_nedann_humidifier.reviews)
                handleReviewshow(less_review_p_nedann_humidifier.reviews,less_review_p_nedann_humidifier.reference,less_review_n_nedann_humidifier.reviews,less_review_n_nedann_humidifier.reference)
              }}>
              値段
            </button>

            <button
              className="rounded-full py-2 px-4 border boder-while" 
              title='positive:2 negative:2'
              onClick={() => {
                buttonClick("部屋",true)
                Reviews(less_review_p_heya_humidifier.reviews,less_review_n_heya_humidifier.reviews)
                handleReviewshow(less_review_p_heya_humidifier.reviews,less_review_p_heya_humidifier.reference,less_review_n_heya_humidifier.reviews,less_review_n_heya_humidifier.reference)
              }}>
              部屋
            </button>

    
            </div>)}
        </div>
 
        {showDetails&&ClickReceive&&
        <div className="w-full flex justify-between ">
          <div className='flex items-center'>
          <ThumbsUp className="text-red-500" />
           <div className="text-red-500 text-left ml-0">{selectedAspect}{calculateKength(PReviews)}件(Positive)
           
           </div>
          </div>
          <div className='flex items-center'>
          <ThumbsDown className="text-blue-500" />
          <div className="text-blue-500 text-right mr-0">{selectedAspect}{calculateKength(NReviews)}件(Negative)</div>
          </div>
        </div>}
       
       {showDetails&&ClickReceive&&
        <div className="w-full mb-4 h-[600px] flex space-x-4">
        <ScrollArea className="border border-red-500 rounded-lg shadow-lg h-[600px] w-1/2 p-4 ">
         <div className="flex flex-col space-y-2">
            {/* 根据 selectedData 数组中的内容渲染 */}
            {PositiveData.map((review, index) => (
              <div key={index} className="border-b py-2 last:border-b-0">
                <div className="flex flex-col">
                  <div>
                    <div>
                     {!expandedIndices[selectedAspect!]?.[index] && showReviewWithclickaspect(review)}
                    </div>
                  {expandedIndices[selectedAspect!]?.[index] &&(
                  <div>
                    <div className="mt-2">{renderReviewWithRedHighlight(review)}</div>
                  </div>
                  )}
                   <button
                       className="font-bold ml-2"
                      //  className="text-blue-500 ml-2"
                       onClick={()=>toggleExpand(selectedAspect!,index)}>
                          {expandedIndices[selectedAspect!]?.[index] ? 'Show Less' : 'Show More'}
                    </button>
                  </div>
                  <div className="text-right mt-2 text-sm text-gray-500">
                    References: {PositiveReferences[index]}
                  </div>
                </div>
              </div>
      
            ))}
          </div>
          </ScrollArea>

        <ScrollArea className="border border-blue-500 rounded-lg shadow-lg h-[600px] w-1/2 p-4">
         <div className="flex flex-col space-y-2">
            {/* 根据 selectedData 数组中的内容渲染 */}
            {NegativeData.map((review, index) => (
              <div key={index} className="border-b py-2 last:border-b-0">
                <div className="flex flex-col">
                  <div>
                   <div>
                     {!expandedRightIndices[selectedAspect!]?.[index] && showReviewWithclickaspect(review)}
                    </div>
                  {expandedRightIndices[selectedAspect!]?.[index] &&(
                  <div>
                    <div className="mt-2">{renderReviewWithBlueHighlight(review)}</div>
                  </div>
                  )}
                   <button
                       className="font-bold ml-2"
                      //  className="text-blue-500 ml-2"
                       onClick={()=>toggleRightExpand(selectedAspect!,index)}>
                          {expandedRightIndices[selectedAspect!]?.[index] ? 'Show Less' : 'Show More'}
                    </button>
                  </div>
                  <div className="text-right mt-2 text-sm text-gray-500">
                    References: {NegativeReferences[index]}
                  </div>
                </div>
              </div>
            ))}
          </div>
          </ScrollArea>
       </div>}



      </div>
    </div>
  )
}