$(document).ready(function () {
    var model = {
        skills: ['Android', 'HTML', 'Javascript', 'jQuery', 'AngularJS'],
        languages: ['Spanish', 'English'],
        softskills: ['Self taught', 'Team player'],
        hobbies: ['Reading (books and tech news)', 'Listen to music', 'Movies & series'],
        jobs: [
            {
                title: 'Intern',
                company: 'Sanmina',
                startDate: '2014',
                endDate: '2015',
                description: 'Lorem ipsum'
            },
            {
                title: 'Programmer Analyst',
                company: 'Sanmina',
                startDate: '2015',
                endDate: 'Present',
                description: 'AngularJS and Android developer.'
            }
        ]
    };

    var view = {
        init: function () {
            var skillsList = $('#skills-list');
            var languagesList = $('#languages-list');
            var softSkillsList = $('#softskills-list');
            var hobbiesList = $('#hobbies-list');
            var jobsList = $('#jobs-list');

            $.each(controller.getSkills(), function (key, value) {
                $('<li>' + value + '</li>').appendTo(skillsList);
            });

            $.each(controller.getLanguages(), function (key, value) {
                $('<li>' + value + '</li>').appendTo(languagesList);
            });

            $.each(controller.getSoftSkills(), function (key, value) {
                $('<li>' + value + '</li>').appendTo(softSkillsList);
            });

            $.each(controller.getHobbies(), function (key, value) {
                $('<li>' + value + '</li>').appendTo(hobbiesList);
            });

            $.each(controller.getJobs(), function (key, value) {
                $('<div class="col-lg-2"><p>' + value.startDate + ' - ' + value.endDate + '</p></div>').appendTo(jobsList);
                $('<div class="col-lg-10"><p><b>' + value.company + '</b> - ' + value.title + '</p><p></p></div>').appendTo(jobsList);
                $('<div class="col-lg-10 col-lg-offset-2"><p>' + value.description + '</p></div>').appendTo(jobsList);
            });

            view.firstTimeRender();
        },
        firstTimeRender: function () {
            $('body').fadeIn(1000);
        }
    };

    var controller = {
        init: function () {
            view.init();
        },
        getSkills: function () {
            return model.skills;
        },
        getLanguages: function () {
            return model.languages;
        },
        getSoftSkills: function () {
            return model.softskills;
        },
        getHobbies: function () {
            return model.hobbies;
        },
        getJobs: function () {
            return model.jobs;
        }
    };

    controller.init();
});