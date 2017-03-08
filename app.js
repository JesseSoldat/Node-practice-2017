var fs = require('fs');

var readMe = fs.readFileSync('Readme.md', 'utf8');
//blocking 
// console.log(readMe);
// fs.writeFileSync('writeMe.txt', readMe);
//if no file exist it will create one
//-------------------------------------------------------
//async non-blocking
fs.readFile('Readme.md', 'utf8', function(err, data){
	// console.log(data);
	fs.writeFile('writeMeAsync.txt', data);
	console.log('writeMeAsync has been created');
});
console.log('I will run first before readFile');
console.log('---------------------------------------------');
//check if a file exists
fs.exists('writeMe.txt', function(exists){
	//console.log('exists ', exists); //true or false
	if (exists){
		//delete a file 
		fs.unlink('writeMe.txt');
		console.log('writeMe.txt was deleted!');
	} else {
		console.log('Sorry writeMe.txt was not found!');
	}
	
});


//Create and Remove Directories Sync
//-------------------------------------------------------
// fs.mkdirSync('jlab');

function exists(name) {
	fs.exists(name, function(exists){
		if(exists){
			fs.rmdirSync(name);
			console.log('The ' +name+ ' directory was deleted');
		} else {
			console.log('The ' +name+ ' directory was not found');
		}
	});
}

// exists('jlab');

//Create and Remove Directories Async
//-------------------------------------------------------
function deleteFileDir(name, type){
	fs.exists(name, function(exists){
		if(exists){

			if(type === 'file'){
				fs.unlink(name);
				console.log('The '+name+' file was deleted');
			} else {
				fs.rmdir(name);
				console.log('The '+name+' directory was deleted');
			}//if-else

		} else {
			console.log('The '+name+' '+type+' was not found');	
		}//if-else

	});
}

// deleteFileDir('testdelete.txt', 'file');
// deleteFileDir('deleteMe', 'dir');
var makeBatchDir = function(name, amount){
		for(let i = 0; i < amount; i++){
			fs.mkdir(`./temp/${name} 0${i + 1}`, function(){
				console.log(amount+' folders have been created');
			});
		}
};

var makeBatchFile = function(name, amount){
	for(let i = 0; i < amount; i++){
		fs.writeFile(`./temp/${name}0${i + 1}.txt`, function(){
			console.log(amount+' files have been created');
		});
	}
};

function createFileDir(name, type, amount){
	if(type === 'file'){
		makeBatchFile(name, amount);
	} else {
		makeBatchDir(name, amount);
	}	
}
// createFileDir('accounting', 'file', 3);
// createFileDir('billing', 'dir', 3);

//NOTES can not rmdir() if that directory has files in it
let deleteBatch = function(name, path, amount, ext){
	
	for(let i = 1; i < amount +1; i++){
		fs.unlink(`./${path}/${name}0${i}.${ext}`, function(){
			console.log(`./${path}/${name}0${i}.${ext} has been deleted`);
			fs.rmdir(path, function(){
				console.log(`${path} has been deleted`);
			});
		});
	}
};

// deleteBatch('accounting', 'temp', 3, 'txt');