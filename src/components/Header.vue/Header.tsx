import React from 'react';
import Frame from '../WhetherFrame/Frame';
import style from './Header.module.scss';

const Header = () => {
	return (
		<div className={style.header}>
			<div className={style.btns}>
				<div className={style.btns__view}>
					<p>Today</p>
					<p>Week</p>
				</div>
				<div className={style.btns__temperature}>
					<p>°C</p>
					<p>°F</p>
				</div>
			</div>
			<div className={style.header__content}>
				<Frame />
				<Frame />
				<Frame />
				<Frame />
				<Frame />
			</div>
		</div>
	);
};

export default Header;