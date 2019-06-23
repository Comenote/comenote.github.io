$(document).ready(function() {
	//sidebar start
	$('#dismiss, .overlay').on('click', function () {
			// hide sidebar
			$('#sidebar').removeClass('active');
			// hide overlay
			$('.overlay').removeClass('active');
	});
	$('#sidebarCollapse').on('click', function () {
			$('#sidebar').toggleClass('active');
			$('.overlay').addClass('active');
	});
	//sidebar end
	$("#my").on("click", function(e) {
			e.preventDefault();
			console.log($(".main-input").val());
			let task = $(".main-input").val();
			$(".main-input").val("");
			$(".list").prepend(`<li><div class="border border-info rounded mt-1 col-sm-5 col-sm-10 task"><h6 class="mt-2 h5 task-text text-capitalize">${task}</h6></div><i class="done text-success  fas fa-check"></i><button class="btn btn-danger delete"><i class="fas fa-minus"></i></li>`)
	});
	
	$(".submit").on("click", function(){
			let title = $("#listTitle").val();
			let tasks = $(".list").children().find(".task").find(".task-text");
			let content = {};
			content["title"] = title;
			$(tasks).each(function(index) {
				content[index] = $(this).text();
			});
			console.log(tasks)
			
			async function createPost(){
			let data = {content};
			const option = {
					method: "POST",
					mode: "cors",
					headers: {
							"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
			}
			console.log(option.body);
			try{
					let data = await fetch("/api/lists", option);
					let result = await data.json();
					console.log(data, result);
			}
			catch(err){
					console.log(err);
					}
			}
			createPost();
	});
}); 
    
