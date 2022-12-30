import React from 'react';

class SkillsList extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        articles: [],
}}
componentDidMount(){
  this.fetchedData();
}
 
fetchedData(){
  fetch('http://localhost:3000/articles')
  .then(res => res.json())
  .then(
    (result) => {
      this.setState({
        articles : result
    });
})
  .catch(err => console.error(err));
};


render(){
  const{articles} = this.state;
    return(
        <div class="skills-list">
          <div class="box">
            {articles.map(article => (
              <div key={article}>
                {article.name}
                {article.description}
              </div>))}
            </div>
        </div>)}}

export default SkillsList;

// export function getArticles(_id) {
//     return this.state.articles.find(
//       (article) => article._id === _id
//     );
//   }