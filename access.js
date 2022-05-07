const yargs = require('yargs')
const child = require('child_process')

const key = '123'
const argv = yargs
	.command(
		'run-server',
		'command to run a server',
		{
			key: {
				describe: 'access key to run the server',
				demand: true,
				alias: 'k',
			}
		},
		(args) => {
			if (args.key === key) {
				child.exec('nodemon app.js', (err, stdout) => {
					err ? console.log(err) : console.log(stdout)
				})
			} else {
				console.log('incorrect key')
			}
		}
	)
	.help().argv
