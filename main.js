
var MUSCLE_GROUPS = [
	{
		name: "Back",
		exercises: [
		{
			name: "Wide Grip Pull Down"
		},
		{
			name: "Seated Row Machine"
		},
		{
			name: "One Arm Dumbbell Rows"
		},
		{
			name: "Bent Over Rows"
		},
		{
			name: "One Arm Barbell Rows"
		},
		{
			name: "Pull Ups"
		},
		{
			name: "Two Arm Barbell Rows"
		}
		]
	},
	{
		name: "Hips",
		exercises: [
		{
			name: "Seated Hip Abductors"
		},
		{
			name: "Seated Hip Aductors"
		},
		{
			name: "Standing Hip Aductors"
		},
		{
			name: "Standing Hip Abductors"
		}
		]
	},
	{
		name: "Biceps",
		exercises: [
		{
			name: "Dumbbell Hammer Curls"
		},
		{
			name: "Preacher Curls"
		},
		{
			name: "Straight Bar Curls"
		},
		{
			name: "Dumbbell Curls"
		},
		{
			name: "Preacher Curl Machine"
		},
		{
			name: "One Arm Pulley Curls"
		},
		{
			name: "Two Arm Pulley Curls"
		},
		{
			name: "Chin Ups"
		},
		{
			name: "Concentration Curls"
		}
		]
	},
	{
		name: "Triceps",
		exercises: [
		{
			name: "Two Hand Overhead Extension"
		},
		{
			name: "One Hand Overhead Extension"
		},
		{
			name: "Dumbbell Kickbacks"
		},
		{
			name: "One Arm Pushdown"
		},
		{
			name: "Two Arm Pushdown"
		},
		{
			name: "Dips"
		},
		{
			name: "Dip Machine"
		},
		{
			name: "Tricep Machine"
		},
		{
			name: "Skull Crushers"
		}
		]
	},
	{
		name: "Core",
		exercises: [
		{
			name: "Ab Bridges"
		},
		{
			name: "Back Hyper-extensions"
		},
		{
			name: "Side Hyper-extensions"
		},
		{
			name: "Toe To Bar"
		},
		{
			name: "Leg Raises"
		},
		{
			name: "6 Inch Leg Lifts"
		},
		{
			name: "Crunches"
		},
		{
			name: "Sit Ups"
		}
		]
	},
	{
		name: "Quadriceps",
		exercises: [
		{
			name: "Squats"
		},
		{
			name: "Deadlifts"
		},
		{
			name: "Lunges"
		},
		{
			name: "Smith Machine"
		},
		{
			name: "Wall Sits"
		},
		{
			name: "One Legged Leg Extension"
		},
		
		{
			name: "Two Legged Leg Extension"
		}
		]
	},
	{
		name: "Hamstrings",
		exercises: [
		{
			name: "One Legged Lying Hamstring Curl"
		},
		{
			name: "Two Legged Lying Hamstring Curl"
		},
		{
			name: "One Legged Sitting Hamstring Curl"
		},
		{
			name: "Two Legged Sitting Hamstring Curl"
		},
		{
			name: "Straight Leg Dead Lifts"
		},
		{
			name: "Donkey Kicks on Hip Machine"
		}
		]
	},
	{
		name: "Calf",
		exercises: [
		{
			name: "One Leg Standing Calf Raise"
		},
		{
			name: "Two Leg Standing Calf Raises"
		},
		{
			name: "Calf Raises on Leg Press Machine"
		},
		{
			name: "Seated Calf Raise"
		},
		{
			name: "One Legged Calf Raise Machine"
		},
		{
			name: "Two Legged Calf Raise Machine"
		}
		]
	},
	{
		name: "Chest",
		exercises: [
		{
			name: "Dumbbell Chest Press"
		},
		{
			name: "Dumbbell Incline Press"
		},
		{
			name: "Dumbbell Decline Press"
		},
		{
			name: "Barbell Chest Press"
		},
		{
			name: "Barbell Incline Press"
		},
		{
			name: "Barbell Decline Press"
		},
		{
			name: "Dumbbell Flies"
		},
		{
			name: "Dumbbell Incline Flies"
		},
		{
			name: "Dumbbell Decline Flies"
		},
		{
			name: "Fly Machine"
		},
		{
			name: "Chest Press Machine"
		},
		{
			name: "Push ups"
		},
		{
			name: "Cable Flies"
		}
		]
	},
	{
		name: "Shoulders",
		exercises: [
		{
			name: "Dumbbell Side Raises"
		},
		{
			name: "Dumbbell Front Raises"
		},
		{
			name: "Dumbbell Shoulder Press"
		},
		{
			name: "Plate Front Raises"
		},
		{
			name: "Shrugs"
		},
		{
			name: "Seated Barbell Shoulder Press"
		},
		{
			name: "Standing Barbell Shoulder Press"
		},
		{
			name: "Arnold Press"
		},
		{
			name: "Handstand Push-ups"
		},
		{
			name: "Military Press Machine"
		}
		]
	}
];

var workouts = [
	{
		index: 0,
		date: "2014/03/13 04:12",
		name: "Workout 1",
		description: "first test workout in the system. Use this to test the profile page.",
		planOnly: false,
		exercises: [
			{
				mg_index: 4,
				e_index: 3,
				sets: [
					{
						weight: 80,
						reps:12,
						status: "Too Easy"
					},
					{
						weight: 90,
						reps:10,
						status: "Just Right"
					},
					{
						weight: 90,
						reps:8,
						status: "Just Right"
					},
				]
			},
			{
				mg_index: 3,
				e_index: 3,
				sets: [
					{
						weight: 40,
						reps:15,
						status: "Too Hard"
					},
					{
						weight: 30,
						reps:10,
						status: "Too Easy"
					},
					{
						weight: 35,
						reps:10,
						status: "Just Right"
					},
				]
			}
		]
	},
	{
		index: 1,
		date: "2014/04/03 04:12",
		name: "Workout 2",
		description: "second test workout in the system. Use this to test the profile page.",
		planOnly: false,
		exercises: [
			{
				mg_index: 4,
				e_index: 3,
				sets: [
					{
						weight: 80,
						reps:12,
						status: "Too Easy"
					},
					{
						weight: 90,
						reps:10,
						status: "Just Right"
					},
					{
						weight: 90,
						reps:8,
						status: "Just Right"
					},
				]
			},
			{
				mg_index: 1,
				e_index: 1,
				sets: [
					{
						weight: 40,
						reps:15,
						status: "Too Hard"
					},
					{
						weight: 30,
						reps:10,
						status: "Too Easy"
					},
					{
						weight: 35,
						reps:10,
						status: "Just Right"
					},
				]
			}
		]
	},
	{
		index: 2,
		date: "2014/04/13 04:12",
		name: "Workout 3",
		description: "Third test workout in the system. This should not show up in the profile page because it is only a plan.",
		planOnly: true,
		exercises: [
			{
				mg_index: 4,
				e_index: 3,
				sets: [
					{
						weight: 80,
						reps:12,
						status: ""
					},
					{
						weight: 90,
						reps:10,
						status: ""
					},
					{
						weight: 90,
						reps:8,
						status: ""
					},
				]
			},
			{
				mg_index: 1,
				e_index: 1,
				sets: [
					{
						weight: 40,
						reps:15,
						status: ""
					},
					{
						weight: 30,
						reps:10,
						status: ""
					},
					{
						weight: 35,
						reps:10,
						status: ""
					},
				]
			}
		]
	}
];

var current_workout = {
	name: "New Workout",
	description: "",
	planOnly: false,
	exercises: []
};

var current_exercise = {};

var current_exercise_index = 0;

var isAddingSet = false;

window.onload = load_main;

function load_main()
{
	$("#title").html('<div id="t"><h1>Home</h1></div>');
	$("#content").load("main.html");
}

//
// MAIN FUNCTIONS
//

function main_start_workout() {
	
	var m = new Date();
	var dateString =
	m.getUTCFullYear() +"/"+
	("0" + (m.getUTCMonth()+1)).slice(-2) +"/"+
	("0" + m.getUTCDate()).slice(-2) + " " +
	("0" + m.getUTCHours()).slice(-2) + ":" +
	("0" + m.getUTCMinutes()).slice(-2);

	current_workout.date = dateString;
	$("#content").load("log.html");
	$("#title").html("<div class='title-top'>Date: " + current_workout.date + "</div>"
		+"<div class='title-bottom'>" + current_workout.name + "</div>" );
}


function main_load_workout() {
	$("#title").html('<div id="t"><h1>Load Workout</h1></div>' );
	$("#content").load("basicSearch.html", null, function() {
		load_search_results(workouts);
	});
}

function load_advanced_search() {
	$("#title").html('<div id="t"><h1>Load Workout - Advanced</h1></div>' );
	$("#content").load("advancedSearch.html");
}


function main_view_profile() {
	$("#title").html('<div id="t"><h1>View Profile</h1></div>');
	$("#content").load("studentProfile.html", null, function(){
		//set up musclegroup and exercise selectors.
		load_muscle_group_select();
	});
}

function load_muscle_group_select() {

	var select_muscle_groups = [];

	for (var i = 0; i < workouts.length; i++) {
		var workout = workouts[i];
		for (var j = 0; j < workout.exercises.length; j++) {
			var exercise = workout.exercises[j];
			select_muscle_groups[exercise.mg_index] = true;
		};
	};

	var html = "<option selected disabled>Muscle Group</option>"
	for (var i = 0; i < MUSCLE_GROUPS.length; i++) {
		var mg = MUSCLE_GROUPS[i];
		if(select_muscle_groups[i]) {
			html += "<option value='" + i + "'>" + mg.name + "</option>"
		}
	};

	$("#select_muscle_group").html(html);
	$("#select_muscle_group").bind("change", load_exercise_select);

}

function load_exercise_select() {

	var select_exercises = [];

	var mg_index = $("#select_muscle_group").val();

	for (var i = 0; i < workouts.length; i++) {
		var workout = workouts[i];
		for (var j = 0; j < workout.exercises.length; j++) {
			var exercise = workout.exercises[j];
			if(exercise.mg_index == mg_index){
				select_exercises[exercise.e_index] = true;
			}
		};
	};

	var html = "<option selected disabled>Exercise</option>"
	for (var i = 0; i < MUSCLE_GROUPS[mg_index].exercises.length; i++) {
		var e = MUSCLE_GROUPS[mg_index].exercises[i];
		if(select_exercises[i]) {
			html += "<option value='" + i + "'>" + e.name + "</option>"
		}
	};

	$("#select_exercise").html(html);
	$("#select_exercise").bind("change", load_student_data);
	
	$("#avg").html("__");
	$("#max").html("__");
	$("#inc_1").html("__");
}

function load_student_data() {
	console.log("Load Student Data");

	var mg_index = $("#select_muscle_group").val();
	var e_index = $("#select_exercise").val();

	var first = -1, last = 0, total = 0, count = 0, max = 0;

	for (var i = 0; i < workouts.length; i++) {
		var workout = workouts[i];
		for (var j = 0; j < workout.exercises.length; j++) {
			var exercise = workout.exercises[j];
			if(exercise.mg_index == mg_index && exercise.e_index == e_index){
				//go through sets and calculate: avg, max, percent increase/decrease over 1 week, 2 weeks.
				for (var k = 0; k < exercise.sets.length; k++) {
					var set = exercise.sets[k];
					if(first == -1) first = parseInt(set.weight);
					if(max < set.weight) max = parseInt(set.weight);
					last = parseInt(set.weight);
					total += parseInt(set.weight);
					count++;
				};
			}
		};
	};

	var avg = (total / count).toFixed(2);
	var percent = (((last - first) / first) * 100).toFixed(2);

	$("#avg").html(avg);
	$("#max").html(max);
	$("#inc_1").html(percent);

}

function main_logout() {

}

//
//Load Workout
//


function toggle_workout(index) {
	
	var arrow = $("#workout_"+index).find(".arrow");

	if(arrow.hasClass("expanded")) {
		//un select the workout and toggle the arrow.
		$("#workout_"+index).removeClass("exercise-main-current").addClass("exercise-main");
		arrow.removeClass("expanded").addClass("collapsed");

		//hide exercises for this workout
		$(".toggle_for_exercise_"+index).addClass("hidden");

		//disable load button
		$("#load-btn").addClass("disabled");
	} else {
		current_workout_index = index;

		//collapse all other workouts and their exercises
		$(".exercise-main-current").addClass("exercise-main").removeClass("exercise-main-current");
		$(".arrow").removeClass("expanded").addClass("collapsed");
		$(".workout-detail").addClass("hidden");

		//expand the selected workout
		$("#workout_"+index).addClass("exercise-main-current");
		arrow.removeClass("collapsed").addClass("expanded");
		$(".toggle_for_exercise_"+index).removeClass("hidden");

		//enable load button
		$("#load-btn").removeClass("disabled");
	}
}

function search_basic() {
	var search_text = $("#search_text").val().toLowerCase();

	console.log("Basic Search");
	var found_workouts = [];
	for (var i = 0; i < workouts.length; i++) {
		var workout = workouts[i];

		var search_frags = search_text.split(" ");
		for (var l = 0; l < search_frags.length; l++) {
			search_frag = search_frags[l];

			if(search_frag.length > 8 && workout.date.indexOf(search_frag) != -1) {
				found_workouts.push(workout);
				break;
			}

			if(workout.name.toLowerCase().indexOf(search_frag) != -1) {
				found_workouts.push(workout);
				break;
			}

			var has_exercise = false;
			for (var j = 0; j < workout.exercises.length; j++) {
				var exercise = workout.exercises[j];

				if(search_frag.indexOf(MUSCLE_GROUPS[exercise.mg_index].name.toLowerCase()) != -1) {
					has_exercise = true;
					break;
				}
			}
			if(has_exercise) {
				found_workouts.push(workout);
				break;
			}
		};

	}
	console.log(found_workouts);
	//load the found exercieses into the #search-results
	load_search_results(found_workouts);

}

function search_advanced() {
	var search_muscle_group = $("#muscle_group").val().toLowerCase();
	var search_date = $("#creation_date").val();
	var search_exercise = $("#exercise").val();

	console.log("Advanced Search");
	console.log(search_muscle_group);
	console.log(search_exercise);
	var found_workouts = [];
	for (var i = 0; i < workouts.length; i++) {
		var workout = workouts[i];

		if(search_date.length > 0 && workout.date.indexOf(search_date) != -1) {
			found_workouts.push(workout);
			continue;
		}
		
		for (var j = 0; j < workout.exercises.length; j++) {
			var exercise = workout.exercises[j];

			if(search_muscle_group.length > 0 &&  search_muscle_group.indexOf(MUSCLE_GROUPS[exercise.mg_index].name.toLowerCase()) != -1) {
				found_workouts.push(workout);
				break;
			}
			exercise_name = MUSCLE_GROUPS[exercise.mg_index].exercises[exercise.e_index].name.toLowerCase();
			exercise_name_frags = exercise_name.split(" ");

			var frag_exists = false;
			for (var k = 0; k < exercise_name_frags.length && frag_exists == false; k++) {
				var frag = exercise_name_frags[k];
				if(search_exercise.length > 0 && search_exercise.indexOf(frag) != -1){
					frag_exists = true;
				}
			};

			if(frag_exists){
				found_workouts.push(workout);
				break;
			}
		};
	};
	console.log(found_workouts);
	//load the found exercieses into the #search-results
	load_search_results(found_workouts);

}

function load_search_results(found_workouts) {
	var html = "";
	if(found_workouts.length == 0) {
		html = '<div style="margin-left: 30px;">No workouts found for your search.</div>';
	}		
	for( var i = 0; i < found_workouts.length; i++){
		var workout = found_workouts[i];
		html += '<div id="workout_' + workout.index + '" class="exercise-main" onclick="toggle_workout(' + workout.index + ')">'
				+'<div class="arrow collapsed"></div>'
				+'<div class="workout-name">' + workout.name + '</div>'
				+'<div class="workout-description">' + workout.description + '</div>'
			+'</div>' ;
		for( var j = 0; j < workout.exercises.length; j++){
			var exercise = workout.exercises[j];
			html += '<div class="workout-detail hidden toggle_for_exercise_' + workout.index + '">'
				+'<div class="exercise-detail-name">'+ MUSCLE_GROUPS[exercise.mg_index].exercises[exercise.e_index].name + '</div>'
				+'<div class="log-section">'
					+'<div class="mini-title">Sets:</div>'
					+'<div class="sets">' + exercise.sets.length + ' </div>'
				+'</div>'
				+'<div class="log-section">'
					+'<div class="mini-title">Reps:</div>'
					+'<div class="reps">' + exercise.sets[0].reps + '</div>'
				+'</div>'
			+'</div>';
		}
	}
	$("#search-results").html(html);
}

function load_workout() {
	current_workout = jQuery.extend(true, {}, workouts[current_workout_index]);
	
	var m = new Date();
	var dateString =
	m.getUTCFullYear() +"/"+
	("0" + (m.getUTCMonth()+1)).slice(-2) +"/"+
	("0" + m.getUTCDate()).slice(-2) + " " +
	("0" + m.getUTCHours()).slice(-2) + ":" +
	("0" + m.getUTCMinutes()).slice(-2);

	current_workout.date = dateString;
	current_workout.name = "New Workout";

	//blank all sets
	for (var i = 0; i < current_workout.exercises.length; i++) {
		var exercise = current_workout.exercises[i];
		for (var j = 0; j < exercise.sets.length; j++) {
			exercise.sets[j].reps = "";
			exercise.sets[j].status = "";
			exercise.sets[j].weight = "";
		};
	};

	$("#content").load("log.html", null, function(){
		render_exercises();
	});
	$("#title").html("<div class='title-top'>Date: " + current_workout.date + "</div>"
		+"<div class='title-bottom'>" + current_workout.name + "</div>" );
}

//
// LOG WORKOUT
//

function log_add_exercise() {
	$("#popover").html(getMuscleGroupsHTML());
	$("#popover").removeClass("hidden");
	$("#content").addClass("hidden");
}

function mg_back() {
	$("#content").removeClass("hidden");
	$("#popover").addClass("hidden");
}

function e_back() {
	$("#popover").html(getMuscleGroupsHTML());
}

function createNewMuscleGroup() {
	//show the input for the new muscle group name and the "Create" Button
	console.log("here");
	var html = '<div class="add-muscle-group">'
			+'<input id="new-muscle-group" class="form-control" type="text" placeholder="New Muscle Group">'
			+'<button id="add-group-btn" class="btn btn-lg btn-danger" onclick="addCreatedMuscleGroup()">Add</button>'
			+'<button id="cancel-add-group-btn" class="btn btn-lg btn-danger" onclick="cancelCreateMuscleGroup()">Cancel</button>'
		+'</div>';
	$("#create-new-muscle-group-div").after(html);
	$("#create-new-muscle-group-div").addClass("hidden");
}

function cancelCreateMuscleGroup() {
	$(".add-muscle-group").remove();
	$("#create-new-muscle-group-div").removeClass("hidden");
}

function addCreatedMuscleGroup() {
	if($("#new-muscle-group").val() == ""){
		return;
	}
	//get name of new muscle group from input and add it as a muscle group in the MUSCLE_GROUPS array
	var new_muscle_group = {
		name: $("#new-muscle-group").val(),
		exercises: []
	};
	MUSCLE_GROUPS.push(new_muscle_group);
	//reload #popover with getMuscleGroupsHTML
	$("#popover").html(getMuscleGroupsHTML());
}

function selectMuscleGroup(mg_index) {
	current_exercise.mg_index = mg_index;

	$("#popover").html(getExercisesHTML(mg_index));
}

function createNewExercise() {
	//show the input for the new muscle group name and the "Create" Button
	var html = '<div class="create-new-exercise">'
			+'<input id="new-exercise" class="form-control" type="text" placeholder="New Exercise">'
			+'<button id="add-exercise-btn" class="btn btn-lg btn-danger" onclick="addCreatedExercise()">Add</button>'
			+'<button id="cancel-add-exercise-btn" class="btn btn-lg btn-danger" onclick="cancelCreateExercise()">Cancel</button>'
		+'</div>';
	$("#create-new-exercise-div").after(html);
	$("#create-new-exercise-div").addClass("hidden");
}

function cancelCreateExercise() {
	$(".create-new-exercise").remove();
	$("#create-new-exercise-div").removeClass("hidden");
}

function addCreatedExercise() {
	if($("#new-exercise").val() == ""){
		return;
	}
	//get name of new muscle group from input and add it as a muscle group in the MUSCLE_GROUPS array
	var muscle_group = MUSCLE_GROUPS[current_exercise.mg_index];
	var new_exercise = {
		name: $("#new-exercise").val()
	}
	muscle_group.exercises.push(new_exercise);
	//reload #popover with getExercisesHTML
	$("#popover").html(getExercisesHTML(current_exercise.mg_index));
}

function selectExercise(e_index) {
	current_exercise_index = current_workout.exercises.length;

	current_exercise.e_index = e_index;
	current_exercise.sets = [];
	current_workout.exercises.push(current_exercise);
	current_exercise = {};

	$("#popover").addClass("hidden");
	$("#content").removeClass("hidden");

	render_exercises();
	add_set_for_exercise(current_workout.exercises.length - 1);

	enable_workout_complete();
}

function render_exercises() {
	var html = '';
	for( var i = 0; i < current_workout.exercises.length; i++) {
		var exercise = current_workout.exercises[i];
		html += '<div id="exercise_' + i + '" class="exercise exercise-main clearfix" data-index="' + i + '" onclick="toggle_exercise(' + i + ')">'
			+'<div class="arrow collapsed"></div>'
			+'<div class="exercise-name">' + MUSCLE_GROUPS[exercise.mg_index].exercises[exercise.e_index].name + '</div>'
			+'<div class="remove" onclick="show_remove_options(this)">X</div>'
		+'</div>';
	}
	$("#exercise-block").html(html);
}

function render_sets(index) {
	var html = '';
	for( var i = 0; i < current_workout.exercises[index].sets.length; i++) {
		var set = current_workout.exercises[index].sets[i];
		html += '<div class="exercise-set" data-index="' + i + '" onclick="edit_set(' + i + ', this)">'
			+ '<div class="set-number">Set ' + (i+1) +'</div>'
			+ '<div class="log-section">'
				+ '<div class="mini-title">Reps:</div>'
				+ '<div class="reps">' + set.reps + '</div>'
			+ '</div>'
			+ '<div class="log-section">'
				+ '<div class="mini-title">Weight:</div>'
				+ '<div class="weight">' + set.weight + '</div>'
			+ '</div>'
			+ '<div class="log-section">'
				+ '<div class="status">' + set.status + '</div>'
			+ '</div>'
			+ '<div class="remove" onclick="show_remove_options(this)">X</div>			'
		+ '</div>';
	};
	return html;
}

function toggle_exercise(index) {

	$(".logging-area").remove();

	var arrow = $("#exercise_"+index).find(".arrow");

	if(arrow.hasClass("expanded")) {
		$("#exercise_"+index).removeClass("exercise-main-current").addClass("exercise-main");
		arrow.removeClass("expanded").addClass("collapsed");
	} else {
		current_exercise_index = index;
		$(".exercise-main-current").addClass("exercise-main").removeClass("exercise-main-current");
		$(".arrow").removeClass("expanded").addClass("collapsed");

		$("#exercise_"+index).addClass("exercise-main-current");
		arrow.removeClass("collapsed").addClass("expanded");

		$("#exercise_"+index).after("<div class='logging-area'></div>");
		$(".logging-area").html('<div class="exercise-set-wrapper clearfix">'
			+'</div><div id="add-new-set-container">'
				+'<div class="btn btn-lg btn-danger new-set-btn" onclick="add_set_for_exercise(' + current_exercise_index + ')">New Set</div>'
			+'</div>');
		$(".exercise-set-wrapper").html(render_sets(index));
	}

	if(isAddingSet) {
		isAddingSet = false;
		$("#log-workout-wrapper").append('<div id="add-exercise" onclick="log_add_exercise()">Add Exercise...	</div>');
	}
}

function show_remove_options(context) {

	$(".remove-buttons-wrapper").after('<div class="remove" onclick="show_remove_options(this)"></div>');
	$(".remove-buttons-wrapper").remove();
	$(".remove").html("X");

	$(context).after('<div class="remove-buttons-wrapper"></div>');
	$(context).remove();
	$(".remove-buttons-wrapper").html('<button class="btn btn-danger remove-btn" onclick="remove_row(this)">Remove</button>'
		+'<button class="btn btn-danger cancel-btn" onclick="cancel_remove(this)">Cancel</button>');
	event.stopPropagation();
}

function cancel_remove(context) {
	$(".remove-buttons-wrapper").after('<div class="remove" onclick="show_remove_options(this)"></div>');
	$(".remove-buttons-wrapper").remove();
	$(".remove").html("X");
	event.stopPropagation();
}

function remove_row(context) {
 	var row = $(context).parent().parent()
	if(row.hasClass("exercise")) {
		var index = row.data("index");
		if( index == current_exercise_index) {
			current_exercise_index = 0;
		}
		current_workout.exercises.splice(index, 1);

		render_exercises();

		if(isAddingSet){
			isAddingSet = false;
			$("#log-workout-wrapper").append('<div id="add-exercise" onclick="log_add_exercise()">Add Exercise...	</div>');
		}
	} else {
		var index = row.data("index");
		if( index >= 0) {
			current_workout.exercises[current_exercise_index].sets.splice(index, 1);
		}
		$(".logging-area").html('<div class="exercise-set-wrapper clearfix">'
			+'</div><div id="add-new-set-container">'
				+'<div class="btn btn-lg btn-danger new-set-btn" onclick="add_set_for_exercise(' + current_exercise_index + ')">New Set</div>'
			+'</div>');
		if(isAddingSet){
			isAddingSet = false;
			$("#log-workout-wrapper").append('<div id="add-exercise" onclick="log_add_exercise()">Add Exercise...	</div>');
		}
		$(".exercise-set-wrapper").html(render_sets(current_exercise_index));
	}

	enable_workout_complete();
	event.stopPropagation();
}

function add_set_for_exercise(index) {
	isAddingSet = true;

	$(".logging-area").remove();
	$("#add-exercise").remove();

	$("#exercise_"+index).removeClass("exercise-main").addClass("exercise-main-current").find("div.arrow").removeClass("collapsed").addClass("expanded");
	$("#exercise_"+index).after("<div class='logging-area'></div>");
	$(".logging-area").html('<div class="exercise-set-wrapper clearfix">'
		+ '</div>'
		+ '<div class="scroll-wheels">'
			+ '<div class="scroll-wrapper"></div>'
		+'</div>'
		+'<div class="logging-buttons-wrapper clearfix">'
			+'<button class="btn btn-lg btn-danger logging-btn" onclick="add_set(\'Too Easy\')">Too Easy</button>'
			+'<button class="btn btn-lg btn-danger logging-btn" onclick="add_set(\'Just Right\')">Just Right</button>'
			+ '<button class="btn btn-lg btn-danger logging-btn" onclick="add_set(\'Too Hard\')">Too Hard</button>'
		+ '</div>');
		
		$(".scroll-wrapper").load("divs/selectors", null, function(){
			$('#reps').iPhonePicker({ width: '80px', imgRoot: 'images/' });
			$('#weights').iPhonePicker({ width: '80px', imgRoot: 'images/' });			
		});

	var html = render_sets(index);
	html += '<div class="exercise-set">'
		+ '<div class="set-number">Set ' + (current_workout.exercises[index].sets.length+1) +'</div>'
		+ '<div class="log-section">'
			+ '<div class="mini-title">Reps:</div>'
			+ '<div class="reps">____</div>'
		+ '</div>'
		+ '<div class="log-section">'
			+ '<div class="mini-title">Weight:</div>'
			+ '<div class="weight">____</div>'
		+ '</div>'
		+ '<div class="remove" onclick="show_remove_options(this)">X</div>			'
	+ '</div>';
	$(".exercise-set-wrapper").html(html);

}

function add_set(status) {
	isAddingSet = false;

	var new_set = {};
	new_set.reps =  $('#reps option:selected').val();
	new_set.weight =  $('#weights option:selected').val();
	new_set.status = status;

	current_workout.exercises[current_exercise_index].sets.push(new_set);

	$(".logging-area").html('<div class="exercise-set-wrapper clearfix">'
		+'</div><div id="add-new-set-container">'
			+'<div class="btn btn-lg btn-danger new-set-btn" onclick="add_set_for_exercise(' + current_exercise_index + ')">New Set</div>'
		+'</div>');
	$("#log-workout-wrapper").append('<div id="add-exercise" onclick="log_add_exercise()">Add Exercise...	</div>');
	$(".exercise-set-wrapper").html(render_sets(current_exercise_index));

	enable_workout_complete();
}

function edit_set(index, _this) {
	console.log("Edit Set");
	if(isAddingSet){
		return;
	}

	$("#add-new-set-container").remove();
	$("#add-exercise").remove();

	isAddingSet = true;
	var html = '<div class="scroll-wheels">'
			+ '<div class="scroll-wrapper"></div>'
		+'</div>'
		+'<div class="logging-buttons-wrapper clearfix">'
			+'<button class="btn btn-lg btn-danger logging-btn" onclick="save_set(' + index + ',\'Too Easy\')">Too Easy</button>'
			+'<button class="btn btn-lg btn-danger logging-btn" onclick="save_set(' + index + ',\'Just Right\')">Just Right</button>'
			+'<button class="btn btn-lg btn-danger logging-btn" onclick="save_set(' + index + ',\'Too Hard\')">Too Hard</button>'
		+ '</div>';

	$(_this).after(html);

	$(".scroll-wrapper").load("divs/selectors", null, function(){
		$('#reps').iPhonePicker({ width: '80px', imgRoot: 'images/' });
		$('#weights').iPhonePicker({ width: '80px', imgRoot: 'images/' });			
	});
}

function save_set(index, status) {
	isAddingSet = false;

	var set = current_workout.exercises[current_exercise_index].sets[index];
	set.reps =  $('#reps option:selected').val();
	set.weight =  $('#weights option:selected').val();
	set.status = status;


	$(".logging-area").html('<div class="exercise-set-wrapper clearfix">'
		+'</div><div id="add-new-set-container">'
			+'<div class="btn btn-lg btn-danger new-set-btn" onclick="add_set_for_exercise(' + current_exercise_index + ')">New Set</div>'
		+'</div>');
	$("#log-workout-wrapper").append('<div id="add-exercise" onclick="log_add_exercise()">Add Exercise...	</div>');
	$(".exercise-set-wrapper").html(render_sets(current_exercise_index));

	enable_workout_complete();	
}

function enable_workout_complete() {
	if(current_workout.exercises.length == 0){
		//disable workout complete button
		$("#workout-complete-btn").addClass("disabled");
		return;
	}
	for( var i = 0; i < current_workout.exercises.length; i++) {
		if(current_workout.exercises[i].sets.length == 0) {
			//disable workout complete button
			$("#workout-complete-btn").addClass("disabled");
			return;
		}
		for (var j = current_workout.exercises[i].sets.length - 1; j >= 0; j--) {
			if(current_workout.exercises[i].sets[j].status == "" || current_workout.exercises[i].sets[j].weight == "" || current_workout.exercises[i].sets[j].sets == ""){
				$("#workout-complete-btn").addClass("disabled");
				return;
			}
		};
	}
	

	$("#workout-complete-btn").removeClass("disabled");
}

function getMuscleGroupsHTML() {
	var html = "";
	for( var i = 0; i < MUSCLE_GROUPS.length; i++){
		var muscle_group = MUSCLE_GROUPS[i];
		html += '<div class="muscle-group" onclick="selectMuscleGroup(' + i + ')">'
			+'<div class="muscle-group-name">' + muscle_group.name + '</div>'
			+'<img class="nav-arrow-right" src="img/nav-arrow.png">'
		+'</div>';
	}
	html += '<div id="create-new-muscle-group-div" class="muscle-group" onclick="createNewMuscleGroup()">'
			+'<div class="muscle-group-name">Create New Muscle Group</div>'
			+'<img class="nav-arrow-right" src="img/nav-arrow.png">'
		+'</div>'
		+'<div id="back-button-wrapper">'
			+'<button class="btn btn-lg btn-danger" id="cancel-workout-btn" onclick="mg_back()">Back</button>'
		+'</div>';
	return html;
}

function getExercisesHTML(mg_index) {
	var html = "";
	for( var i = 0; i < MUSCLE_GROUPS[mg_index].exercises.length; i++){
		var exercise = MUSCLE_GROUPS[mg_index].exercises[i];
		html += '<div class="exercise" onclick="selectExercise(' + i + ')">'
			+'<img class="video-link" src="img/video-link.png" onclick="show_video(' + i + ')">'
			+'<div class="exercise-name">' + exercise.name + '</div>'
			+'<img class="nav-arrow-right" src="img/nav-arrow.png">'
		+'</div>';
	}
	html += '<div id="create-new-exercise-div" class="exercise" onclick="createNewExercise()">'
			+'<div class="exercise-name">Create New Exercise</div>'
			+'<img class="nav-arrow-right" src="img/nav-arrow.png">'
		+'</div>'
		+'<div id="back-button-wrapper">'
			+'<button class="btn btn-lg btn-danger" id="cancel-workout-btn" onclick="e_back()">Back</button>'
		+'</div>';
	return html;
}

function show_video(e_index) {
	$("#popover").html('<div id="video-wrapper">'
			+'<div class="video-title">How To: ' + MUSCLE_GROUPS[current_exercise.mg_index].exercises[e_index].name + '</div>'
			+'<div class="video-section"><iframe width="900" height="600" src="//www.youtube.com/embed/uVp27_BdCJM" frameborder="0" allowfullscreen></iframe></div>'
			+'<div id="video-buttons-wrapper" class"clearfix">'
				+'<button class="btn btn-danger video-select-btn" onclick="selectExercise(' + e_index + ')">Select Exercise</button>'
				+'<button class="btn btn-danger video-back-btn" onclick="selectMuscleGroup(' + current_exercise.mg_index + ')">Back</button>'
			+'</div>'
		+'</div>');
	event.stopPropagation()
}

function cancel_workout() {

	if(!confirm("Are you sure you would like to leave this page? Doing so will clear the current workout.")) {
		return;
	}
	
	current_workout = {
		name: "New Workout",
		description: "",
		planOnly: false,
		exercises: []
	};

	load_main();
}

function workout_complete() {
	$("#title").html('<div id="t"><h1>Save Workout</h1></div>');
	$("#content").load("saveWorkout.html");
}

function save_workout() {
	var name = $("#workout_name").val();
	var desc = $("#workout_desc").val();

	current_workout.index = workouts.length;
	current_workout.name = name;
	current_workout.description = desc;

	workouts.push(current_workout);

	current_workout = {
		name: "New Workout",
		description: "",
		planOnly: false,
		exercises: []
	};

	load_main();
}
//
// PLAN WOKROUT
//

