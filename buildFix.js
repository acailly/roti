var exec = require('child_process').exec;
var execSync = require('child_process').execSync;

//var failedToMinifyRegex = /Failed to minify the code from this file.*(node_modules[\w\/]*)\:/
var failedToMinifyRegex = /Failed to minify the code from this file[\w\W]*(node_modules[\.\w\/-]*)\:/m

var files = []

function build(){
	try{
		execSync("yarn build")
		
		console.log('END', stdout)
		console.log('--- FILES ---')
		files.map(function(file){
			console.log(file)
		})
		return false
	}
	catch(err){
		var stdout = err.stdout
		
		var res = failedToMinifyRegex.exec(stdout)
		if(res){
			var file = res[1]
			files.push(file)
			console.log('Converting', file)
			execSync("node_modules\\.bin\\babel " + file + " --out-file " + file + " --presets=es2015")
			console.log('Done')
			return true
		}
		else{
			console.log('END', stdout)
			console.log('--- FILES ---')
			files.map(function(file){
				console.log(file)
			})
			return false
		}
	}
	
	
}

while(build()){}
