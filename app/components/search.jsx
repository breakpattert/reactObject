//require导入css
require('./search.css');
//React
import React from 'react'; 
//声明一个createClass为一个组件类库 
let Search = React.createClass({
//	react中getinitialstate中初始化的属性可以用在this.props取出来
	getInitialState: function() {
		return {
			bg: "transparent",
		}
	},
//	只有componentDidMount声明周期函数是确定被执行一次的，类似ComponentWillMount的生命周期钩子都有可能执行多次
	componentDidMount: function() {
		
		window.onscroll = (event) => {
			let realHeight = document.documentElement.scrollTop || document.body.scrollTop;
			let optatic = 0.8 * (realHeight/142);
			if(optatic <= 0.8 ) {
				this.setState({
					bg: `rgba(234, 44, 44, ${optatic})`,
				})
			}
		}
	},
	//渲染机制
	render: function() {
		let bColor = this.state.bg ? this.state.bg : 'transprent';
		return (
			<div id="search" className="pf"  style={{ background: bColor }}>
				<div className="search pr">
					<div className="sl pa">
						<i></i>
					</div>
					<div className="frc pr">
						<span className="searchicon pa"></span>
						<form>
							<input placeholder="全场畅饮，部分低至99减50" type="text"/>
						</form>
					</div>
					<div className="sub pa">
						<span>登录</span>
					</div>
				</div>
			</div>
		);
	}
})

module.exports = Search;