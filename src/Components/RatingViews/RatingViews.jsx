import "./RatingViews.css";
 
function RatingViews({ rating}){
    const RoundedRating = Math.floor(rating);
    const decimalPart = rating - RoundedRating;
    return(
        <div>
            {Array.from({length: RoundedRating}).map((_, index) =>{
            return(
                <span key ={index} className="star">
                    &#9733;
                </span>
            );
            
              })}
             {decimalPart.toFixed(1)}
        </div>
    );
}
export default RatingViews;