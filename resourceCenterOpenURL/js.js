(function resourceCenterOpenURL() {
    if (!pendo.designerEnabled) {
        document.getElementById('pendo-resource-center-container').setAttribute('style', 'display:none');
        window.open("https://example.com/",'_blank'); /* Replace https://example.com/ with your desired external URL */
        step.eventRouter.eventable.trigger('pendoEvent', {
            action: 'returnToResourceCenterHome'
        });
        window.pendo.BuildingBlocks.BuildingBlockResourceCenter.getResourceCenter().hide();
    }
 })();
