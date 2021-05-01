gdjs.EndCode = {};
gdjs.EndCode.GDScoreTextObjects1= [];
gdjs.EndCode.GDScoreTextObjects2= [];
gdjs.EndCode.GDEndTextObjects1= [];
gdjs.EndCode.GDEndTextObjects2= [];
gdjs.EndCode.GDBackgroundObjects1= [];
gdjs.EndCode.GDBackgroundObjects2= [];
gdjs.EndCode.GDScoreObjects1= [];
gdjs.EndCode.GDScoreObjects2= [];

gdjs.EndCode.conditionTrue_0 = {val:false};
gdjs.EndCode.condition0IsTrue_0 = {val:false};
gdjs.EndCode.condition1IsTrue_0 = {val:false};


gdjs.EndCode.eventsList0 = function(runtimeScene) {

{


gdjs.EndCode.condition0IsTrue_0.val = false;
{
gdjs.EndCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.EndCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.EndCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.EndCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDScoreObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.EndCode.condition0IsTrue_0.val = false;
{
gdjs.EndCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if (gdjs.EndCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Startscreen", false);
}}

}


};

gdjs.EndCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndCode.GDScoreTextObjects1.length = 0;
gdjs.EndCode.GDScoreTextObjects2.length = 0;
gdjs.EndCode.GDEndTextObjects1.length = 0;
gdjs.EndCode.GDEndTextObjects2.length = 0;
gdjs.EndCode.GDBackgroundObjects1.length = 0;
gdjs.EndCode.GDBackgroundObjects2.length = 0;
gdjs.EndCode.GDScoreObjects1.length = 0;
gdjs.EndCode.GDScoreObjects2.length = 0;

gdjs.EndCode.eventsList0(runtimeScene);
return;

}

gdjs['EndCode'] = gdjs.EndCode;
