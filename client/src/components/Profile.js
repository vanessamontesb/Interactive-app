import React, { Component } from 'react'
import Navbar from './Navbar'
import '../components/components.css/profile.css'
import ReactYouTubeExample from '../pages/youtube'
import Twitter from '../pages/twitter'
import NewsPost from './news_post';
import Input from './input';
import Select from './select';
import Pagination from './pagination';

const BASE_PATH = 'https://hn.algolia.com/api/v1';
const SEARCH_PATH = '/search';
const SEARCH_PARAM = 'query=';
const PAGE_HITS = 'hitsPerPage=';
const PAGE_PARAM = 'page=';

const HITS = [
	{
		value: 10,
		label: 10
	},
	{
		value: 20,
		label: 20
	},
	{
		value: 30,
		label: 30
	}
];


class Profile extends Component {
  constructor() {
    super()
    this.state = {
      searchQuery: '',
      result: {},
      hitsPerPage: 20,
      page: 0
    }
  }

  componentDidMount(){
		const {searchQuery, hitsPerPage, page} = this.state;
		this.fetchData(searchQuery, hitsPerPage, page);
	}

	fetchData = (searchQuery ,hitsPerPage, page) => {
		fetch(`${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${searchQuery}&${PAGE_HITS}${hitsPerPage}&${PAGE_PARAM}${page}`)
			.then(res => res.json())
			.then(result => this.setNews(result))
			.catch(error => error);
	};

	getSearch = ({key}) => {
		if (key === 'Enter'){
			const {searchQuery, hitsPerPage} = this.state;
			this.setState({
				page: 0
			})
			this.fetchData(searchQuery, hitsPerPage, 0);
		}
	};

	handleInputChange = ({target: {value}}) => {
		this.setState ({
			searchQuery: value
		})
	}

	setNews = (result) => {
		this.setState({result});
	}

	handleHitsChange = ({target : {value}}) => {
		const {searchQuery} = this.state;

		this.setState({
			hitsPerPage: +value,
			page: 0
		}, () => {
			this.fetchData(searchQuery, this.state.hitsPerPage, 0);
		})
	};

	handlePageChange = ({ target }) => {
		const btnType = target.getAttribute('data-name');
		let { page } = this.state;

		if(!isNaN(btnType)) {
			this.updatePage(+btnType);
		} else {
			switch (btnType) {
				case 'next':
					this.updatePage(page + 1);
					break;
				case 'prev':
					this.updatePage(page - 1);
					break;
			}
		}
	};

	updatePage = (number) => {
		const { searchQuery, hitsPerPage } = this.state;
		this.setState({
			page: number,
		}, () => {
			this.fetchData(searchQuery, hitsPerPage, number);
		})
	};


  render() {
    const {searchQuery, result, hitsPerPage} = this.state;
		const {hits = [] , page , nbPages} = result;
    return (
      <>
      <Navbar/>
      <section class="grid-1">
        <div class="item-1">
          <Input onKeyPress={this.getSearch} onChange={this.handleInputChange} value={searchQuery} /></div>
        <div class="item-2">
        <Select handleChange={this.handleHitsChange} options={HITS} value={hitsPerPage} />
				<Pagination
					onClick={this.handlePageChange}
					page={page}
					lastPage={nbPages}
				/>
        <ul className="newsList">
					{hits.map(({ author, created_at, num_comments, objectID, title, points, url }) =>
						<NewsPost
							key={objectID}
							author={author}
							created_at={created_at}
							num_comments={num_comments}
							title={title}
							points={points}
							url={url}
						/>
					)}
				</ul>
        </div>
        <div class="item-3">
          <div class="item-4">
            <ReactYouTubeExample/>
          </div>
          <div class="item-5">
            <Twitter/>
          </div>
        </div>
      </section>
      
     
      </>
    )
  }
}

export default Profile
