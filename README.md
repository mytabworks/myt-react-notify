[![github](https://img.shields.io/badge/-github-gray?style=for-the-badge&logo=github)](https://github.com/mytabworks/myt-react-notify#readme)
[![npm](https://img.shields.io/npm/v/myt-react-notify?color=crimson&logo=npm&style=for-the-badge)](https://www.npmjs.com/package/myt-react-notify)
[![yarn](https://img.shields.io/npm/v/myt-react-notify?color=blue&label=yarn&style=for-the-badge&logo=yarn)](https://classic.yarnpkg.com/en/package/myt-react-notify)
[![bundlephobia](https://img.shields.io/bundlephobia/minzip/myt-react-notify?color=%2371bba4&logo=bundlephobia&style=for-the-badge)](https://bundlephobia.com/result?p=myt-react-notify)

# myt-react-notify

This react notification library is a gold. It is easy to use and undestand because it is uniquely engineered and it don`t need a complicated set-up for container and trigger like the majority does. This library set-up feels normal component and handy to understand which makes it unique, it can be render in any functions as component which allow developer to use customize component as templates. and plus it is just 6kb gzip minified, it is so light it can make the tree shaking and feather flying with no regrets.

- [Installation](#installation)
- [How To Use](#how-to-use)
  - [Importing](#import-to-your-project)
  - [Normal Usage](#normal-usage)
  - [Customize Template Usage](#customize-template-usage)
  - [Animation Usage](#animation-usage)
  - [Remaining Notification Usage](#remaining-notification-usage)
  - [Customize Default Template Usage](#customize-default-template-usage)
  - [Updating Notification Usage](#updating-notification-usage)
- [Properties](#properties)
- [License](#license)

# installation

npm

```
npm i myt-react-notify
```

yarn

```
yarn add myt-react-notify
```

<br/>

visit playground 👉 [![Edit notification machine](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/notification-machine-rql5k?fontsize=14&hidenavigation=1&theme=dark)<br/>

# How to use

## import to your project

```js
import { Notification, Render, RenderHasId } from 'myt-react-notify';
```

<br/>
  
## Normal Usage
Notification has a default template stylesheet that can be use/imported when using template option, if not using template and use your own template don`t import it.<br/><br/>
[![Edit myt-react-notify-usage](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/long-voice-4dvho?fontsize=14&hidenavigation=1&theme=dark)
```js
import "myt-react-notify/template.css"
```
```js
<button className="btn" onClick={() => {
  Render(
    <Notification 
      template={{
        title: "success!",
        message: "myt react notify",
        variant: "success",
        dismissible: false,
      }}
      delay={4000}
    />
  );  
}}>
Show Notification
</button>
```
<br/>

## Customize Template Usage

You can make template of your own. <br/><br/>
[![Edit myt-react-notify-usage](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/long-voice-4dvho?fontsize=14&hidenavigation=1&theme=dark)

```js
import { Alert, Button } from 'react-bootstrap';
```

```js
<Button
	onClick={() => {
		Render(
			<Notification placement='bottom-left'>
				{(notificationShow) => (
					<Alert
						variant='danger'
						dismissible
						onClose={() => notificationShow(false)}>
						<Alert.Heading>Oh snap!!</Alert.Heading>
						<p>I can use bootstrap</p>
					</Alert>
				)}
			</Notification>
		);
	}}>
	Show Alert
</Button>
```

<br/>

## Animation Usage

You can use a custom animation class using @keyframe for this component.<br/>
[animate.css](https://daneden.github.io/animate.css/) for cool animations.<br/><br/>
[![Edit myt-react-notify-usage](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/long-voice-4dvho?fontsize=14&hidenavigation=1&theme=dark)

```js
<button
	className='btn'
	onClick={() => {
		Render(
			<Notification
				template={{
					title: 'Animated!',
					message: 'that is so cool',
					variant: 'primary',
					dismissible: false
				}}
				animation={{
					enter: 'animated bounceInLeft',
					exit: 'animated fadeOutDown'
				}}
				timing={1000}
				delay={4000}
			/>
		);
	}}>
	Show Animated Notification
</button>
```

<br/>

## Remaining Notification Usage

You can remove the timeout of the notification by setting `delay` as `0`.<br/><br/>
[![Edit myt-react-notify-usage](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/long-voice-4dvho?fontsize=14&hidenavigation=1&theme=dark)

```js
<button
	className='btn'
	onClick={() => {
		Render(
			<Notification
				template={{
					title: 'Hey!',
					message: 'I`m not closing unless 👉',
					variant: 'warning',
					dismissible: true
				}}
				animation={{
					enter: 'animated bounceInLeft',
					exit: 'animated fadeOutDown'
				}}
				timing={1000}
				delay={0}
			/>
		);
	}}>
	Show No Timeout Notification
</button>
```

<br/>

## Customize Default Template Usage

You can customize the default template as well.<br/><br/>
[![Edit myt-react-notify-usage](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/long-voice-4dvho?fontsize=14&hidenavigation=1&theme=dark)

```js
<button
	className='btn'
	onClick={() => {
		Render(
			<Notification
				template={{
					message: (
						<a
							href='https://codesandbox.io/s/notification-machine-rql5k?fontsize=14&hidenavigation=1&theme=dark'
							target='_blanks'
							style={{ textDecoration: 'none' }}>
							<div>
								<img
									src='https://avatars0.githubusercontent.com/u/28913097?v=4'
									alt='beard'
									width='20%'
								/>
								<span style={{ padding: '10px 15px' }}>hey check me out</span>
							</div>
						</a>
					),
					variant: 'primary',
					dismissible: true
				}}
				animation={{
					enter: 'animated bounceInLeft',
					exit: 'animated fadeOutDown'
				}}
				timing={1000}
				delay={4000}
			/>
		);
	}}>
	Customize Default Template
</button>
```

<br/>

## Updating Notification Usage

You can update or change notification anytime and anywhere using `id` which must be unique. but cannot be updated the Notification property `timing`, `placement` and `delay`.<br/><br/>
[![Edit myt-react-notify-usage](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/long-voice-4dvho?fontsize=14&hidenavigation=1&theme=dark)

```js
<button
	className='btn'
	onClick={() => {
		Render(
			<Notification
				id='notify'
				template={{
					title: 'Hey!',
					message: 'what is up?',
					variant: 'primary'
				}}
				onEntered={() =>
					Render(
						<Notification
							id='notify'
							template={{
								title: 'Pal!',
								message: 'wooow I can change',
								variant: 'success'
							}}
						/>
					)
				}
				onExit={() =>
					Render(
						<Notification
							id='notify'
							template={{
								title: 'Yo!',
								message: "I'am going now bye",
								variant: 'danger'
							}}
						/>
					)
				}
			/>
		);
	}}>
	Updating Notification
</button>
```

<br/>

## Cancel Notification Usage

You can close or cancel immidiately notification by updating the identified notification `cancel` as `true`.<br/><br/>
[![Edit myt-react-notify-usage](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/long-voice-4dvho?fontsize=14&hidenavigation=1&theme=dark)

```js
<button className="btn" onClick={() => {
  Render(
    <Notification
      id="persistent"
      template={{
        title: "Hey!",
        message: "I`m not closing unless you cancel",
        variant: "warning",
        dismissible: false,
      }}
      animation={{
        enter: "animated bounceInLeft",
        exit: "animated fadeOutDown"
      }}
      timing={1000}
      delay={0}
    />
  );
}}>
Persistent Notification
</button>
<button className="btn" onClick={() => {
  Render(
    <Notification
      id="persistent"
      cancel={true}
    />
  );
}}>
Cancel
</button>
```

<br/>

## RenderHasId Usage

You can check the identified notification if it is already rendered.<br/><br/>
[![Edit myt-react-notify-usage](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/long-voice-4dvho?fontsize=14&hidenavigation=1&theme=dark)

```js
<button
	className='btn'
	onClick={() => {
		Render(
			RenderHasId('check-me') ? (
				<Notification
					id='check-me'
					template={{
						title: 'Heeee..',
						message: 'I`m already rendered',
						variant: 'danger',
						dismissible: true
					}}
				/>
			) : (
				<Notification
					id='check-me'
					template={{
						title: 'Yo!',
						message: 'I just got rendered',
						variant: 'success',
						dismissible: false
					}}
					delay={0}
				/>
			)
		);
	}}>
	Click Again If Rendered
</button>
```

<br/>

## PROPERTIES

All properties that is supported by Notification Component.<br/>
The datatypes with "\*" means it is required.

| PROPERTY   | DATATYPES                                                                                                                                                                                                                                                                   | DEFAULT      | DESCRIPTION                                                                                                                                                                                                                          |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| id         | string                                                                                                                                                                                                                                                                      | &nbsp;       | It is to identify the notification you want to update and cancel                                                                                                                                                                     |
| template   | {<br/>&nbsp;&nbsp;title: string, <br/>&nbsp;&nbsp;message: string, <br/>&nbsp;&nbsp;variant: "success"<br/>&nbsp;&nbsp;&nbsp;&nbsp;\|"primary"<br/>&nbsp;&nbsp;&nbsp;&nbsp;\|"warning"<br/>&nbsp;&nbsp;&nbsp;&nbsp;\|"danger", <br/>&nbsp;&nbsp;dismissible: boolean<br/> } | &nbsp;       | It is the properties of default template. if using default templating you must import the stylesheet `import "myt-react-notify/template.css"`. <br/> `default` `{ title: null, message: "", variant: "default", dismissible: true }` |
| animation  | object                                                                                                                                                                                                                                                                      | &nbsp;       | you can set a customize animations. <br/>`default` `{ enter: "fade-notify-in", exit: "fade-notify-out" }`                                                                                                                            |
| timing     | number                                                                                                                                                                                                                                                                      | 1000         | It is the duration of each animation                                                                                                                                                                                                 |
| delay      | number                                                                                                                                                                                                                                                                      | 5000         | It is the duration of notification will last. if the delay is set `0` it will remain forever unless dismiss                                                                                                                          |
| placement  | top-left\|top-right\|bottom-left\|bottom-right                                                                                                                                                                                                                              | bottom-right | the placement where the notification will remain                                                                                                                                                                                     |
| children   | function                                                                                                                                                                                                                                                                    | &nbsp;       | It enables you to make a [customize template](#customize-template-usage)                                                                                                                                                             |
| cancel     | boolean                                                                                                                                                                                                                                                                     | false        | It is to cancel or close the certain identified or with `id` notification                                                                                                                                                            |
| onEnter    | function                                                                                                                                                                                                                                                                    | &nbsp;       | it is invoke when the animation is started to enter                                                                                                                                                                                  |
| onEntering | function                                                                                                                                                                                                                                                                    | &nbsp;       | it is invoke when the animation is entering                                                                                                                                                                                          |
| onEntered  | function                                                                                                                                                                                                                                                                    | &nbsp;       | it is invoke when the animation is fully entered                                                                                                                                                                                     |
| onExit     | function                                                                                                                                                                                                                                                                    | &nbsp;       | it is invoke when the animation is started to exit                                                                                                                                                                                   |
| onExiting  | function                                                                                                                                                                                                                                                                    | &nbsp;       | it is invoke when the animation is exiting                                                                                                                                                                                           |
| onExited   | function                                                                                                                                                                                                                                                                    | &nbsp;       | it is invoke when the animation is fully exited                                                                                                                                                                                      |
| onMounted  | function                                                                                                                                                                                                                                                                    | &nbsp;       | it is invoke when the component is mounted                                                                                                                                                                                           |

## Specials

you can remove notification in mobile using swipe from left to right.

## License

MIT Licensed. Copyright (c) Mytabworks 2020.
