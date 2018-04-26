import React, { Component } from 'react';
import ClickBurst from '../components/ClickBurst';
import mojs from 'mo-js';
import '../css/common.css';

class Demo extends Component {
	
	saveData = (title) => {
		const data = { title};
		fetch('http://localhost:5000/api/data', {
			headers: new Headers({
				'Content-Type': 'application/json'
			}),
			mode: 'cors',
			method: 'POST',
			body: JSON.stringify(data)
		})
		.then(res => res.json())
		.then(data => {
			// console.log(data);
		})
	}

	addBurst = (item) => () => {
		const burst = new mojs.Burst({
	
			radius:   { 0: 100 },
			count:    5,
			children: {
				shape:        'circle',
				radius:       20,
				fill:       [item.color],
				strokeWidth:  5,
				duration:     2000
			}
		});
		const x = Math.floor((Math.random() - 0.5) * window.innerWidth * 0.7);
		const y = Math.floor((Math.random() - 0.5) * window.innerHeight * 0.7);
		burst
			.tune({x,  y})
			.setSpeed(2)
			.replay();
		this.saveData(item.title);
	}
  renderBtn = (item) => {
		return (
			<ClickBurst key={item.title}>
				<button onClick={this.addBurst(item)}>{item.title}</button>
			</ClickBurst>
		)
	}
  render() {
		const items = [
			{
				color: 'deeppink',
				title: 'lala'
			},
			{
				color: 'cyan',
				title: 'wooow'
			},
			{
				color: 'yellow',
				title: 'woohoo'
			}
		];
    return (
      <div className="row-flex-container justify">
			  {items.map(this.renderBtn)}
      </div>
    );
  }
}

export default Demo;
