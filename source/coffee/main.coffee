console.log 'foobar'

SocialShareKit.init();

# hash = window.location.hash

# $('#playbill .date-block .date').fitText(1.2, { minFontSize: '25px', maxFontSize: '100px' })


# $("#playbill .calendar a").click (e) ->
# 	e.preventDefault()
# 	unless $(this).attr("class") is "active"
# 		$("#playbill .calendar a").removeClass "active"
# 		$(this).addClass "active"
# 		unless $("#playbill .performance").attr("class") is "active"
# 			$("#playbill .performance").addClass "active"
# 			unless $($(this).attr("href")).attr("class") is "active"
# 				$("#playbill .performance").removeClass "active"
# 				$($(this).attr("href")).addClass "active"
# 	# else
# 	# 	$($(this).attr("href")).removeClass "active"
# 	# 	$(this).removeClass "active"
# 	# 	$("#playbill .performance").removeClass "active"



# $(".secondary-navigation .nav-menu-item > a").click (e) ->
# 	e.preventDefault()

# 	link = $(this)
# 	item = link.parent()
# 	dest = $(link.attr("href"))
# 	# window.location = link.attr("href")

# 	unless item.attr("class") is "active"
# 		$(".secondary-navigation .nav-menu-item").removeClass "active"
# 		item.addClass "active"
# 		unless $('.content .section').attr("class") is "active"
# 			$('.content .section').addClass "active"
# 			unless dest.attr("class") is "active"
# 				$('.content .section').removeClass "active"
# 				dest.addClass "active"

BuyPopUpShow = ->
    $('.buy-popup').show()

BuyPopUpHide = ->
    $('.buy-popup').hide()

$(document).ready ->
    BuyPopUpHide()

$('.buy-button').click (e) ->
    e.preventDefault()
    e.stopPropagation()

    BuyPopUpShow()


# ShowSideMenu = (e) ->
#     e.show


$(".mainMenu .mainMenu-item > a").click (e) ->
    mainMenuLink = $(this)
    mainMenuItem = mainMenuLink.parent()
    mainMenuItems = mainMenuItem.parent().children()
    sideMenu = mainMenuItem.children(".sideMenu")
    sideMenus = mainMenuItems.children(".sideMenu")
    # item.parent().addClass('parent')
    # dest = $(mainMenuLink.attr("href"))
    # window.location = mainMenuLink.attr("href")

    if $(window).width() <= 1440
        e.preventDefault()
        unless sideMenu.is(':visible')
            # mainMenuItems.removeClass "active"
            # mainMenuItems.removeClass "child-active"
            # mainMenuItem.addClass "active"
            # mainMenuItem.addClass "child-active"
            sideMenus.hide()
            sideMenu.show()
        else
            # mainMenuItem.removeClass "active"
            # mainMenuItem.removeClass "child-active"
            sideMenu.hide()