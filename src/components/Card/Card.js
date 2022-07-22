import React from 'react';


const Card=(props)=>{
    const{cardnum,cardname,exmonth,exyear,cvv,focusedElement} =props
    let cardArray=[];
    let temp=[]
    let cvvnum=cvv.split('');
        temp=cardnum.split('');
            for(let i=0;i<16;i++)
            {
                    if(i<=temp.length && temp.length>0 && temp[i] !==undefined)
                    {
                        if(i>3 && i<12)
                        {
                            cardArray.push('*') 
                        }
                        else{
                            cardArray.push(temp[i]);
                        }
                    }
                    else{
                            cardArray.push('#');
                    }
            }
        let logo=''
        if(cardArray[0]==='5')
            logo='cardLogo2'
         else if(cardArray[0]==='3')
            logo='cardLogo3'
        else if(cardArray[0]==='6')
            logo='cardLogo4'
        else
            logo='cardLogo1'
        return(
            <div className={(focusedElement==='cardcvv') ? 'cardBg cardBgBack' :'cardBg'}>
                 <div className='card-side cardBack'>
                    <div className='blackBg'>
                    </div>
                    <div className='cvvWrap'>
                        <div>CVV</div>
                        <div className='cvvNum'>
                        {
                            cvvnum.map((val,index) =>(
                                <span key= {index}>*</span>
                            ))
                        }
                        </div>
                    </div>
                    <div className={`margin20 cardLogo ${logo}`}></div>
                </div>
                <div className={(focusedElement==='cardcvv') ? 'card-side cardFront cardFrontActive' :'card-side cardFront'}>
                    <div className={`cardLogo ${logo}`}></div>
                    <div className={(focusedElement==='cardnumber') ? 'borderWhite cardNumber' :'cardNumber'}>{
                        cardArray.map((val,index)=>(
                        <span key={index}>{val}</span>
                        ))
                    }</div> 
                    <div className='cardDetail'>
                            <div className={(focusedElement==='cardname') ? 'borderWhite cardHolder' :'cardHolder'}>
                                <p className='title'>Card Holder</p>
                                <p className='detailText'>{(cardname==='')?'FirstName LastName' :cardname}</p>
                            </div>
                            <div className={(focusedElement==='expirymonth' || focusedElement==='expiryyear') ? 'borderWhite cardExpiry' :'cardExpiry'}>
                                <p className='title'>Expires</p>
                                <p className='detailText'>{(exmonth==='')?'MM' :exmonth}/{(exyear==='')? 'YY' : (exyear.toString().slice(-2))}</p>
                            </div>
                    </div>
                </div>
               
            </div>
           
        )
}
export default Card
