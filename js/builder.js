$(document).ready(function () {
    var model = {
        skills: ['HTML', 'Javascript', 'JQuery', 'AngularJS', 'CSS', 'Java'],
        languages: ['Spanish', 'English'],
        softskills: ['Self taught', 'Team player'],
        hobbies: ['Reading (books and tech news)', 'Listen to music', 'Movies & Series']
    };

    var view = {
        init: function () {
            var skillList = $('#skills-list');
            var languageList = $('#languages-list');
            var softSkillList = $('#softskills-list');
            var hobbieList = $('#hobbies-list');

            $.each(controller.getSkills(), function (key, value) {
                $('<li>' + value + '</li>').appendTo(skillList);
            });

            $.each(controller.getLanguages(), function (key, value) {
                $('<li>' + value + '</li>').appendTo(languageList);
            });

            $.each(controller.getSoftSkills(), function (key, value) {
                $('<li>' + value + '</li>').appendTo(softSkillList);
            });

            $.each(controller.getHobbies(), function (key, value) {
                $('<li>' + value + '</li>').appendTo(hobbieList);
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
        }
    };

    controller.init();
});