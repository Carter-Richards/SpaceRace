gdjs.Level_322Code = {};
gdjs.Level_322Code.GDPlayerObjects1= [];
gdjs.Level_322Code.GDPlayerObjects2= [];
gdjs.Level_322Code.GDPlayerObjects3= [];
gdjs.Level_322Code.GDPlayerObjects4= [];
gdjs.Level_322Code.GDJumpthruObjects1= [];
gdjs.Level_322Code.GDJumpthruObjects2= [];
gdjs.Level_322Code.GDJumpthruObjects3= [];
gdjs.Level_322Code.GDJumpthruObjects4= [];
gdjs.Level_322Code.GDPlatformObjects1= [];
gdjs.Level_322Code.GDPlatformObjects2= [];
gdjs.Level_322Code.GDPlatformObjects3= [];
gdjs.Level_322Code.GDPlatformObjects4= [];
gdjs.Level_322Code.GDTiledFloorPlatformObjects1= [];
gdjs.Level_322Code.GDTiledFloorPlatformObjects2= [];
gdjs.Level_322Code.GDTiledFloorPlatformObjects3= [];
gdjs.Level_322Code.GDTiledFloorPlatformObjects4= [];
gdjs.Level_322Code.GDTiledWallObjects1= [];
gdjs.Level_322Code.GDTiledWallObjects2= [];
gdjs.Level_322Code.GDTiledWallObjects3= [];
gdjs.Level_322Code.GDTiledWallObjects4= [];
gdjs.Level_322Code.GDMovingPlatformObjects1= [];
gdjs.Level_322Code.GDMovingPlatformObjects2= [];
gdjs.Level_322Code.GDMovingPlatformObjects3= [];
gdjs.Level_322Code.GDMovingPlatformObjects4= [];
gdjs.Level_322Code.GDGoLeftObjects1= [];
gdjs.Level_322Code.GDGoLeftObjects2= [];
gdjs.Level_322Code.GDGoLeftObjects3= [];
gdjs.Level_322Code.GDGoLeftObjects4= [];
gdjs.Level_322Code.GDGoRightObjects1= [];
gdjs.Level_322Code.GDGoRightObjects2= [];
gdjs.Level_322Code.GDGoRightObjects3= [];
gdjs.Level_322Code.GDGoRightObjects4= [];
gdjs.Level_322Code.GDLadderObjects1= [];
gdjs.Level_322Code.GDLadderObjects2= [];
gdjs.Level_322Code.GDLadderObjects3= [];
gdjs.Level_322Code.GDLadderObjects4= [];
gdjs.Level_322Code.GDPlayerHitBoxObjects1= [];
gdjs.Level_322Code.GDPlayerHitBoxObjects2= [];
gdjs.Level_322Code.GDPlayerHitBoxObjects3= [];
gdjs.Level_322Code.GDPlayerHitBoxObjects4= [];
gdjs.Level_322Code.GDWalkEnemyObjects1= [];
gdjs.Level_322Code.GDWalkEnemyObjects2= [];
gdjs.Level_322Code.GDWalkEnemyObjects3= [];
gdjs.Level_322Code.GDWalkEnemyObjects4= [];
gdjs.Level_322Code.GDFlyEnemyObjects1= [];
gdjs.Level_322Code.GDFlyEnemyObjects2= [];
gdjs.Level_322Code.GDFlyEnemyObjects3= [];
gdjs.Level_322Code.GDFlyEnemyObjects4= [];
gdjs.Level_322Code.GDTimerObjects1= [];
gdjs.Level_322Code.GDTimerObjects2= [];
gdjs.Level_322Code.GDTimerObjects3= [];
gdjs.Level_322Code.GDTimerObjects4= [];
gdjs.Level_322Code.GDLevelEndObjects1= [];
gdjs.Level_322Code.GDLevelEndObjects2= [];
gdjs.Level_322Code.GDLevelEndObjects3= [];
gdjs.Level_322Code.GDLevelEndObjects4= [];
gdjs.Level_322Code.GDImmortalityObjects1= [];
gdjs.Level_322Code.GDImmortalityObjects2= [];
gdjs.Level_322Code.GDImmortalityObjects3= [];
gdjs.Level_322Code.GDImmortalityObjects4= [];
gdjs.Level_322Code.GDInfiniteTimeObjects1= [];
gdjs.Level_322Code.GDInfiniteTimeObjects2= [];
gdjs.Level_322Code.GDInfiniteTimeObjects3= [];
gdjs.Level_322Code.GDInfiniteTimeObjects4= [];
gdjs.Level_322Code.GDBackgroundObjects1= [];
gdjs.Level_322Code.GDBackgroundObjects2= [];
gdjs.Level_322Code.GDBackgroundObjects3= [];
gdjs.Level_322Code.GDBackgroundObjects4= [];
gdjs.Level_322Code.GDLaserObjects1= [];
gdjs.Level_322Code.GDLaserObjects2= [];
gdjs.Level_322Code.GDLaserObjects3= [];
gdjs.Level_322Code.GDLaserObjects4= [];
gdjs.Level_322Code.GDGoDownObjects1= [];
gdjs.Level_322Code.GDGoDownObjects2= [];
gdjs.Level_322Code.GDGoDownObjects3= [];
gdjs.Level_322Code.GDGoDownObjects4= [];
gdjs.Level_322Code.GDGoUpObjects1= [];
gdjs.Level_322Code.GDGoUpObjects2= [];
gdjs.Level_322Code.GDGoUpObjects3= [];
gdjs.Level_322Code.GDGoUpObjects4= [];

gdjs.Level_322Code.conditionTrue_0 = {val:false};
gdjs.Level_322Code.condition0IsTrue_0 = {val:false};
gdjs.Level_322Code.condition1IsTrue_0 = {val:false};
gdjs.Level_322Code.condition2IsTrue_0 = {val:false};
gdjs.Level_322Code.conditionTrue_1 = {val:false};
gdjs.Level_322Code.condition0IsTrue_1 = {val:false};
gdjs.Level_322Code.condition1IsTrue_1 = {val:false};
gdjs.Level_322Code.condition2IsTrue_1 = {val:false};


gdjs.Level_322Code.eventsList0 = function(runtimeScene) {

{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 10);
}}

}


{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 0);
}}

}


};gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDGoLeftObjects2Objects = Hashtable.newFrom({"GoLeft": gdjs.Level_322Code.GDGoLeftObjects2});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDWalkEnemyObjects2ObjectsGDgdjs_46Level_95322Code_46GDFlyEnemyObjects2Objects = Hashtable.newFrom({"WalkEnemy": gdjs.Level_322Code.GDWalkEnemyObjects2, "FlyEnemy": gdjs.Level_322Code.GDFlyEnemyObjects2});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDGoRightObjects2Objects = Hashtable.newFrom({"GoRight": gdjs.Level_322Code.GDGoRightObjects2});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDWalkEnemyObjects2ObjectsGDgdjs_46Level_95322Code_46GDFlyEnemyObjects2Objects = Hashtable.newFrom({"WalkEnemy": gdjs.Level_322Code.GDWalkEnemyObjects2, "FlyEnemy": gdjs.Level_322Code.GDFlyEnemyObjects2});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDPlayerHitBoxObjects1Objects = Hashtable.newFrom({"PlayerHitBox": gdjs.Level_322Code.GDPlayerHitBoxObjects1});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDWalkEnemyObjects1ObjectsGDgdjs_46Level_95322Code_46GDFlyEnemyObjects1Objects = Hashtable.newFrom({"WalkEnemy": gdjs.Level_322Code.GDWalkEnemyObjects1, "FlyEnemy": gdjs.Level_322Code.GDFlyEnemyObjects1});gdjs.Level_322Code.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.Level_322Code.GDFlyEnemyObjects2 */
/* Reuse gdjs.Level_322Code.GDWalkEnemyObjects2 */

gdjs.Level_322Code.condition0IsTrue_0.val = false;
gdjs.Level_322Code.condition1IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}if ( gdjs.Level_322Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDWalkEnemyObjects2.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDWalkEnemyObjects2[i].getAnimation() == 1 ) {
        gdjs.Level_322Code.condition1IsTrue_0.val = true;
        gdjs.Level_322Code.GDWalkEnemyObjects2[k] = gdjs.Level_322Code.GDWalkEnemyObjects2[i];
        ++k;
    }
}
gdjs.Level_322Code.GDWalkEnemyObjects2.length = k;for(var i = 0, k = 0, l = gdjs.Level_322Code.GDFlyEnemyObjects2.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDFlyEnemyObjects2[i].getAnimation() == 1 ) {
        gdjs.Level_322Code.condition1IsTrue_0.val = true;
        gdjs.Level_322Code.GDFlyEnemyObjects2[k] = gdjs.Level_322Code.GDFlyEnemyObjects2[i];
        ++k;
    }
}
gdjs.Level_322Code.GDFlyEnemyObjects2.length = k;}}
if (gdjs.Level_322Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\SoundFX\\EnemyDead.ogg", false, 5, 1);
}}

}


};gdjs.Level_322Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Level_322Code.GDPlayerHitBoxObjects1, gdjs.Level_322Code.GDPlayerHitBoxObjects2);


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDPlayerHitBoxObjects2.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Level_322Code.condition0IsTrue_0.val = true;
        gdjs.Level_322Code.GDPlayerHitBoxObjects2[k] = gdjs.Level_322Code.GDPlayerHitBoxObjects2[i];
        ++k;
    }
}
gdjs.Level_322Code.GDPlayerHitBoxObjects2.length = k;}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Level_322Code.GDFlyEnemyObjects1, gdjs.Level_322Code.GDFlyEnemyObjects2);

/* Reuse gdjs.Level_322Code.GDPlayerHitBoxObjects2 */
gdjs.copyArray(gdjs.Level_322Code.GDWalkEnemyObjects1, gdjs.Level_322Code.GDWalkEnemyObjects2);

{for(var i = 0, len = gdjs.Level_322Code.GDWalkEnemyObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDWalkEnemyObjects2[i].setAnimation(1);
}
for(var i = 0, len = gdjs.Level_322Code.GDFlyEnemyObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDFlyEnemyObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDWalkEnemyObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDWalkEnemyObjects2[i].activateBehavior("PlatformerObject", true);
}
for(var i = 0, len = gdjs.Level_322Code.GDFlyEnemyObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDFlyEnemyObjects2[i].activateBehavior("PlatformerObject", true);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDWalkEnemyObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDWalkEnemyObjects2[i].getBehavior("PlatformerObject").setGravity(1500);
}
for(var i = 0, len = gdjs.Level_322Code.GDFlyEnemyObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDFlyEnemyObjects2[i].getBehavior("PlatformerObject").setGravity(1500);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.Level_322Code.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
{ //Subevents
gdjs.Level_322Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.Level_322Code.GDPlayerHitBoxObjects1 */

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( !(gdjs.Level_322Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isFalling()) ) {
        gdjs.Level_322Code.condition0IsTrue_0.val = true;
        gdjs.Level_322Code.GDPlayerHitBoxObjects1[k] = gdjs.Level_322Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.Level_322Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


};gdjs.Level_322Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Level_322Code.GDFlyEnemyObjects1, gdjs.Level_322Code.GDFlyEnemyObjects2);

gdjs.copyArray(runtimeScene.getObjects("GoLeft"), gdjs.Level_322Code.GDGoLeftObjects2);
gdjs.copyArray(gdjs.Level_322Code.GDWalkEnemyObjects1, gdjs.Level_322Code.GDWalkEnemyObjects2);


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDGoLeftObjects2Objects, gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDWalkEnemyObjects2ObjectsGDgdjs_46Level_95322Code_46GDFlyEnemyObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_322Code.GDFlyEnemyObjects2 */
/* Reuse gdjs.Level_322Code.GDWalkEnemyObjects2 */
{for(var i = 0, len = gdjs.Level_322Code.GDWalkEnemyObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDWalkEnemyObjects2[i].returnVariable(gdjs.Level_322Code.GDWalkEnemyObjects2[i].getVariables().get("GoingLeft")).setNumber(1);
}
for(var i = 0, len = gdjs.Level_322Code.GDFlyEnemyObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDFlyEnemyObjects2[i].returnVariable(gdjs.Level_322Code.GDFlyEnemyObjects2[i].getVariables().get("GoingLeft")).setNumber(1);
}
}}

}


{

gdjs.copyArray(gdjs.Level_322Code.GDFlyEnemyObjects1, gdjs.Level_322Code.GDFlyEnemyObjects2);

gdjs.copyArray(runtimeScene.getObjects("GoRight"), gdjs.Level_322Code.GDGoRightObjects2);
gdjs.copyArray(gdjs.Level_322Code.GDWalkEnemyObjects1, gdjs.Level_322Code.GDWalkEnemyObjects2);


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDGoRightObjects2Objects, gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDWalkEnemyObjects2ObjectsGDgdjs_46Level_95322Code_46GDFlyEnemyObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_322Code.GDFlyEnemyObjects2 */
/* Reuse gdjs.Level_322Code.GDWalkEnemyObjects2 */
{for(var i = 0, len = gdjs.Level_322Code.GDWalkEnemyObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDWalkEnemyObjects2[i].returnVariable(gdjs.Level_322Code.GDWalkEnemyObjects2[i].getVariables().get("GoingLeft")).setNumber(0);
}
for(var i = 0, len = gdjs.Level_322Code.GDFlyEnemyObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDFlyEnemyObjects2[i].returnVariable(gdjs.Level_322Code.GDFlyEnemyObjects2[i].getVariables().get("GoingLeft")).setNumber(0);
}
}}

}


{

gdjs.copyArray(gdjs.Level_322Code.GDFlyEnemyObjects1, gdjs.Level_322Code.GDFlyEnemyObjects2);

gdjs.copyArray(gdjs.Level_322Code.GDWalkEnemyObjects1, gdjs.Level_322Code.GDWalkEnemyObjects2);


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDWalkEnemyObjects2.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDWalkEnemyObjects2[i].getVariableNumber(gdjs.Level_322Code.GDWalkEnemyObjects2[i].getVariables().get("GoingLeft")) == 1 ) {
        gdjs.Level_322Code.condition0IsTrue_0.val = true;
        gdjs.Level_322Code.GDWalkEnemyObjects2[k] = gdjs.Level_322Code.GDWalkEnemyObjects2[i];
        ++k;
    }
}
gdjs.Level_322Code.GDWalkEnemyObjects2.length = k;for(var i = 0, k = 0, l = gdjs.Level_322Code.GDFlyEnemyObjects2.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDFlyEnemyObjects2[i].getVariableNumber(gdjs.Level_322Code.GDFlyEnemyObjects2[i].getVariables().get("GoingLeft")) == 1 ) {
        gdjs.Level_322Code.condition0IsTrue_0.val = true;
        gdjs.Level_322Code.GDFlyEnemyObjects2[k] = gdjs.Level_322Code.GDFlyEnemyObjects2[i];
        ++k;
    }
}
gdjs.Level_322Code.GDFlyEnemyObjects2.length = k;}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_322Code.GDFlyEnemyObjects2 */
/* Reuse gdjs.Level_322Code.GDWalkEnemyObjects2 */
{for(var i = 0, len = gdjs.Level_322Code.GDFlyEnemyObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDFlyEnemyObjects2[i].addForce(-(300), 0, 0);
}
}{}{for(var i = 0, len = gdjs.Level_322Code.GDWalkEnemyObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDWalkEnemyObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
for(var i = 0, len = gdjs.Level_322Code.GDFlyEnemyObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDFlyEnemyObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.Level_322Code.GDWalkEnemyObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDWalkEnemyObjects2[i].flipX(false);
}
for(var i = 0, len = gdjs.Level_322Code.GDFlyEnemyObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDFlyEnemyObjects2[i].flipX(false);
}
}}

}


{

gdjs.copyArray(gdjs.Level_322Code.GDFlyEnemyObjects1, gdjs.Level_322Code.GDFlyEnemyObjects2);

gdjs.copyArray(gdjs.Level_322Code.GDWalkEnemyObjects1, gdjs.Level_322Code.GDWalkEnemyObjects2);


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDWalkEnemyObjects2.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDWalkEnemyObjects2[i].getVariableNumber(gdjs.Level_322Code.GDWalkEnemyObjects2[i].getVariables().get("GoingLeft")) == 0 ) {
        gdjs.Level_322Code.condition0IsTrue_0.val = true;
        gdjs.Level_322Code.GDWalkEnemyObjects2[k] = gdjs.Level_322Code.GDWalkEnemyObjects2[i];
        ++k;
    }
}
gdjs.Level_322Code.GDWalkEnemyObjects2.length = k;for(var i = 0, k = 0, l = gdjs.Level_322Code.GDFlyEnemyObjects2.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDFlyEnemyObjects2[i].getVariableNumber(gdjs.Level_322Code.GDFlyEnemyObjects2[i].getVariables().get("GoingLeft")) == 0 ) {
        gdjs.Level_322Code.condition0IsTrue_0.val = true;
        gdjs.Level_322Code.GDFlyEnemyObjects2[k] = gdjs.Level_322Code.GDFlyEnemyObjects2[i];
        ++k;
    }
}
gdjs.Level_322Code.GDFlyEnemyObjects2.length = k;}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_322Code.GDFlyEnemyObjects2 */
/* Reuse gdjs.Level_322Code.GDWalkEnemyObjects2 */
{for(var i = 0, len = gdjs.Level_322Code.GDFlyEnemyObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDFlyEnemyObjects2[i].addForce(300, 0, 0);
}
}{}{for(var i = 0, len = gdjs.Level_322Code.GDWalkEnemyObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDWalkEnemyObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
for(var i = 0, len = gdjs.Level_322Code.GDFlyEnemyObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDFlyEnemyObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.Level_322Code.GDWalkEnemyObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDWalkEnemyObjects2[i].flipX(true);
}
for(var i = 0, len = gdjs.Level_322Code.GDFlyEnemyObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDFlyEnemyObjects2[i].flipX(true);
}
}}

}


{

/* Reuse gdjs.Level_322Code.GDFlyEnemyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.Level_322Code.GDPlayerHitBoxObjects1);
/* Reuse gdjs.Level_322Code.GDWalkEnemyObjects1 */

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDPlayerHitBoxObjects1Objects, gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDWalkEnemyObjects1ObjectsGDgdjs_46Level_95322Code_46GDFlyEnemyObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level_322Code.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Level_322Code.eventsList4 = function(runtimeScene) {

{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
gdjs.Level_322Code.condition1IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}if ( gdjs.Level_322Code.condition0IsTrue_0.val ) {
{
{gdjs.Level_322Code.conditionTrue_1 = gdjs.Level_322Code.condition1IsTrue_0;
gdjs.Level_322Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10951796);
}
}}
if (gdjs.Level_322Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\SoundFX\\Jump.ogg", false, 5, 1);
}}

}


};gdjs.Level_322Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Level_322Code.GDPlayerHitBoxObjects2, gdjs.Level_322Code.GDPlayerHitBoxObjects3);


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDPlayerHitBoxObjects3.length;i<l;++i) {
    if ( !(gdjs.Level_322Code.GDPlayerHitBoxObjects3[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Level_322Code.condition0IsTrue_0.val = true;
        gdjs.Level_322Code.GDPlayerHitBoxObjects3[k] = gdjs.Level_322Code.GDPlayerHitBoxObjects3[i];
        ++k;
    }
}
gdjs.Level_322Code.GDPlayerHitBoxObjects3.length = k;}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_322Code.GDPlayerObjects3);
{for(var i = 0, len = gdjs.Level_322Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDPlayerObjects3[i].setAnimationName("Idle");
}
}}

}


{

/* Reuse gdjs.Level_322Code.GDPlayerHitBoxObjects2 */

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDPlayerHitBoxObjects2.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Level_322Code.condition0IsTrue_0.val = true;
        gdjs.Level_322Code.GDPlayerHitBoxObjects2[k] = gdjs.Level_322Code.GDPlayerHitBoxObjects2[i];
        ++k;
    }
}
gdjs.Level_322Code.GDPlayerHitBoxObjects2.length = k;}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_322Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level_322Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDPlayerObjects2[i].setAnimationName("Running");
}
}}

}


};gdjs.Level_322Code.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.Level_322Code.GDPlayerHitBoxObjects2);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDPlayerHitBoxObjects2.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Level_322Code.condition0IsTrue_0.val = true;
        gdjs.Level_322Code.GDPlayerHitBoxObjects2[k] = gdjs.Level_322Code.GDPlayerHitBoxObjects2[i];
        ++k;
    }
}
gdjs.Level_322Code.GDPlayerHitBoxObjects2.length = k;}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_322Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level_322Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDPlayerObjects2[i].setAnimationName("Jumping");
}
}
{ //Subevents
gdjs.Level_322Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.Level_322Code.GDPlayerHitBoxObjects2);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDPlayerHitBoxObjects2.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Level_322Code.condition0IsTrue_0.val = true;
        gdjs.Level_322Code.GDPlayerHitBoxObjects2[k] = gdjs.Level_322Code.GDPlayerHitBoxObjects2[i];
        ++k;
    }
}
gdjs.Level_322Code.GDPlayerHitBoxObjects2.length = k;}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_322Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level_322Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDPlayerObjects2[i].setAnimationName("Falling");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.Level_322Code.GDPlayerHitBoxObjects2);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDPlayerHitBoxObjects2.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level_322Code.condition0IsTrue_0.val = true;
        gdjs.Level_322Code.GDPlayerHitBoxObjects2[k] = gdjs.Level_322Code.GDPlayerHitBoxObjects2[i];
        ++k;
    }
}
gdjs.Level_322Code.GDPlayerHitBoxObjects2.length = k;}if (gdjs.Level_322Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level_322Code.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.Level_322Code.GDPlayerHitBoxObjects2);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDPlayerHitBoxObjects2.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").isOnLadder() ) {
        gdjs.Level_322Code.condition0IsTrue_0.val = true;
        gdjs.Level_322Code.GDPlayerHitBoxObjects2[k] = gdjs.Level_322Code.GDPlayerHitBoxObjects2[i];
        ++k;
    }
}
gdjs.Level_322Code.GDPlayerHitBoxObjects2.length = k;}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_322Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level_322Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDPlayerObjects2[i].setAnimationName("Idle");
}
}}

}


{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_322Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level_322Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDPlayerObjects2[i].flipX(true);
}
}}

}


{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_322Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDPlayerObjects1[i].flipX(false);
}
}}

}


};gdjs.Level_322Code.eventsList7 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_322Code.GDPlayerObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.Level_322Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_322Code.GDPlayerObjects1[0].getPointX("")), "", 0);
}}

}


};gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDGoLeftObjects2Objects = Hashtable.newFrom({"GoLeft": gdjs.Level_322Code.GDGoLeftObjects2});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDMovingPlatformObjects2Objects = Hashtable.newFrom({"MovingPlatform": gdjs.Level_322Code.GDMovingPlatformObjects2});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDGoRightObjects1Objects = Hashtable.newFrom({"GoRight": gdjs.Level_322Code.GDGoRightObjects1});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDMovingPlatformObjects1Objects = Hashtable.newFrom({"MovingPlatform": gdjs.Level_322Code.GDMovingPlatformObjects1});gdjs.Level_322Code.eventsList8 = function(runtimeScene) {

{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GoLeft"), gdjs.Level_322Code.GDGoLeftObjects2);
gdjs.copyArray(runtimeScene.getObjects("GoRight"), gdjs.Level_322Code.GDGoRightObjects2);
{for(var i = 0, len = gdjs.Level_322Code.GDGoLeftObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDGoLeftObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Level_322Code.GDGoRightObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDGoRightObjects2[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoLeft"), gdjs.Level_322Code.GDGoLeftObjects2);
gdjs.copyArray(runtimeScene.getObjects("MovingPlatform"), gdjs.Level_322Code.GDMovingPlatformObjects2);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDGoLeftObjects2Objects, gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDMovingPlatformObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_322Code.GDMovingPlatformObjects2 */
{for(var i = 0, len = gdjs.Level_322Code.GDMovingPlatformObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDMovingPlatformObjects2[i].clearForces();
}
}{for(var i = 0, len = gdjs.Level_322Code.GDMovingPlatformObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDMovingPlatformObjects2[i].addForce(-(200), 0, 1);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDMovingPlatformObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDMovingPlatformObjects2[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoRight"), gdjs.Level_322Code.GDGoRightObjects1);
gdjs.copyArray(runtimeScene.getObjects("MovingPlatform"), gdjs.Level_322Code.GDMovingPlatformObjects1);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDGoRightObjects1Objects, gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDMovingPlatformObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_322Code.GDMovingPlatformObjects1 */
{for(var i = 0, len = gdjs.Level_322Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDMovingPlatformObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Level_322Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDMovingPlatformObjects1[i].addForce(200, 0, 1);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDMovingPlatformObjects1[i].flipX(false);
}
}}

}


};gdjs.Level_322Code.eventsList9 = function(runtimeScene) {

{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
gdjs.Level_322Code.condition1IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "Sec");
}if ( gdjs.Level_322Code.condition0IsTrue_0.val ) {
{
gdjs.Level_322Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}}
if (gdjs.Level_322Code.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("timer").sub(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Sec");
}}

}


{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("timer")) == 0;
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


};gdjs.Level_322Code.eventsList10 = function(runtimeScene) {

{


gdjs.Level_322Code.eventsList9(runtimeScene);
}


};gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDPlayerHitBoxObjects2Objects = Hashtable.newFrom({"PlayerHitBox": gdjs.Level_322Code.GDPlayerHitBoxObjects2});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDLevelEndObjects2Objects = Hashtable.newFrom({"LevelEnd": gdjs.Level_322Code.GDLevelEndObjects2});gdjs.Level_322Code.eventsList11 = function(runtimeScene) {

{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
gdjs.Level_322Code.condition1IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}if ( gdjs.Level_322Code.condition0IsTrue_0.val ) {
{
{gdjs.Level_322Code.conditionTrue_1 = gdjs.Level_322Code.condition1IsTrue_0;
gdjs.Level_322Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10965252);
}
}}
if (gdjs.Level_322Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\SoundFX\\LevelEnd.ogg", false, 10, 1);
}}

}


};gdjs.Level_322Code.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LevelEnd"), gdjs.Level_322Code.GDLevelEndObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.Level_322Code.GDPlayerHitBoxObjects2);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDPlayerHitBoxObjects2Objects, gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDLevelEndObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 3", false);
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("timer")));
}
{ //Subevents
gdjs.Level_322Code.eventsList11(runtimeScene);} //End of subevents
}

}


{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
gdjs.Level_322Code.condition1IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if ( gdjs.Level_322Code.condition0IsTrue_0.val ) {
{
gdjs.Level_322Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}}
if (gdjs.Level_322Code.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Dead");
}}

}


{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.Level_322Code.GDPlayerHitBoxObjects1);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDPlayerHitBoxObjects1[i].getY() > 1000 ) {
        gdjs.Level_322Code.condition0IsTrue_0.val = true;
        gdjs.Level_322Code.GDPlayerHitBoxObjects1[k] = gdjs.Level_322Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.Level_322Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


};gdjs.Level_322Code.eventsList13 = function(runtimeScene) {

{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
gdjs.Level_322Code.condition1IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}if ( gdjs.Level_322Code.condition0IsTrue_0.val ) {
{
{gdjs.Level_322Code.conditionTrue_1 = gdjs.Level_322Code.condition1IsTrue_0;
gdjs.Level_322Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10969324);
}
}}
if (gdjs.Level_322Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Immortality"), gdjs.Level_322Code.GDImmortalityObjects3);
{for(var i = 0, len = gdjs.Level_322Code.GDImmortalityObjects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDImmortalityObjects3[i].setString("Immortality is off");
}
}}

}


{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
gdjs.Level_322Code.condition1IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if ( gdjs.Level_322Code.condition0IsTrue_0.val ) {
{
{gdjs.Level_322Code.conditionTrue_1 = gdjs.Level_322Code.condition1IsTrue_0;
gdjs.Level_322Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10970052);
}
}}
if (gdjs.Level_322Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Immortality"), gdjs.Level_322Code.GDImmortalityObjects3);
{for(var i = 0, len = gdjs.Level_322Code.GDImmortalityObjects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDImmortalityObjects3[i].setString("Immortality is on");
}
}}

}


{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
gdjs.Level_322Code.condition1IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}if ( gdjs.Level_322Code.condition0IsTrue_0.val ) {
{
{gdjs.Level_322Code.conditionTrue_1 = gdjs.Level_322Code.condition1IsTrue_0;
gdjs.Level_322Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10971212);
}
}}
if (gdjs.Level_322Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("InfiniteTime"), gdjs.Level_322Code.GDInfiniteTimeObjects3);
{for(var i = 0, len = gdjs.Level_322Code.GDInfiniteTimeObjects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDInfiniteTimeObjects3[i].setString("InfiniteTime is off");
}
}}

}


{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
gdjs.Level_322Code.condition1IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
}if ( gdjs.Level_322Code.condition0IsTrue_0.val ) {
{
{gdjs.Level_322Code.conditionTrue_1 = gdjs.Level_322Code.condition1IsTrue_0;
gdjs.Level_322Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10971972);
}
}}
if (gdjs.Level_322Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("InfiniteTime"), gdjs.Level_322Code.GDInfiniteTimeObjects2);
{for(var i = 0, len = gdjs.Level_322Code.GDInfiniteTimeObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDInfiniteTimeObjects2[i].setString("InfiniteTime is on");
}
}}

}


};gdjs.Level_322Code.eventsList14 = function(runtimeScene) {

{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
gdjs.Level_322Code.condition1IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}if ( gdjs.Level_322Code.condition0IsTrue_0.val ) {
{
gdjs.Level_322Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}}
if (gdjs.Level_322Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Immortality"), gdjs.Level_322Code.GDImmortalityObjects3);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}{for(var i = 0, len = gdjs.Level_322Code.GDImmortalityObjects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDImmortalityObjects3[i].setString("Immortality is on");
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(1);
}}

}


{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
gdjs.Level_322Code.condition1IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if ( gdjs.Level_322Code.condition0IsTrue_0.val ) {
{
gdjs.Level_322Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}}
if (gdjs.Level_322Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Immortality"), gdjs.Level_322Code.GDImmortalityObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{for(var i = 0, len = gdjs.Level_322Code.GDImmortalityObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDImmortalityObjects2[i].setString("Immortality is off");
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


};gdjs.Level_322Code.eventsList15 = function(runtimeScene) {

{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
gdjs.Level_322Code.condition1IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}if ( gdjs.Level_322Code.condition0IsTrue_0.val ) {
{
gdjs.Level_322Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 0;
}}
if (gdjs.Level_322Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("InfiniteTime"), gdjs.Level_322Code.GDInfiniteTimeObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}{for(var i = 0, len = gdjs.Level_322Code.GDInfiniteTimeObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDInfiniteTimeObjects2[i].setString("InfiniteTime is on");
}
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(1);
}}

}


{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
gdjs.Level_322Code.condition1IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
}if ( gdjs.Level_322Code.condition0IsTrue_0.val ) {
{
gdjs.Level_322Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 0;
}}
if (gdjs.Level_322Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("InfiniteTime"), gdjs.Level_322Code.GDInfiniteTimeObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}{for(var i = 0, len = gdjs.Level_322Code.GDInfiniteTimeObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDInfiniteTimeObjects1[i].setString("InfiniteTime is off");
}
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(1);
}}

}


};gdjs.Level_322Code.eventsList16 = function(runtimeScene) {

{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level_322Code.eventsList13(runtimeScene);} //End of subevents
}

}


{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
gdjs.Level_322Code.condition1IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "p");
}if ( gdjs.Level_322Code.condition0IsTrue_0.val ) {
{
{gdjs.Level_322Code.conditionTrue_1 = gdjs.Level_322Code.condition1IsTrue_0;
gdjs.Level_322Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10973028);
}
}}
if (gdjs.Level_322Code.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}
{ //Subevents
gdjs.Level_322Code.eventsList14(runtimeScene);} //End of subevents
}

}


{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
gdjs.Level_322Code.condition1IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "o");
}if ( gdjs.Level_322Code.condition0IsTrue_0.val ) {
{
{gdjs.Level_322Code.conditionTrue_1 = gdjs.Level_322Code.condition1IsTrue_0;
gdjs.Level_322Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10977004);
}
}}
if (gdjs.Level_322Code.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}
{ //Subevents
gdjs.Level_322Code.eventsList15(runtimeScene);} //End of subevents
}

}


};gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDGoUpObjects2Objects = Hashtable.newFrom({"GoUp": gdjs.Level_322Code.GDGoUpObjects2});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDLaserObjects2Objects = Hashtable.newFrom({"Laser": gdjs.Level_322Code.GDLaserObjects2});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDGoLeftObjects2Objects = Hashtable.newFrom({"GoLeft": gdjs.Level_322Code.GDGoLeftObjects2});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDLaserObjects2Objects = Hashtable.newFrom({"Laser": gdjs.Level_322Code.GDLaserObjects2});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDGoRightObjects2Objects = Hashtable.newFrom({"GoRight": gdjs.Level_322Code.GDGoRightObjects2});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDLaserObjects2Objects = Hashtable.newFrom({"Laser": gdjs.Level_322Code.GDLaserObjects2});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDGoDownObjects2Objects = Hashtable.newFrom({"GoDown": gdjs.Level_322Code.GDGoDownObjects2});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDLaserObjects2Objects = Hashtable.newFrom({"Laser": gdjs.Level_322Code.GDLaserObjects2});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDPlayerHitBoxObjects1Objects = Hashtable.newFrom({"PlayerHitBox": gdjs.Level_322Code.GDPlayerHitBoxObjects1});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDLaserObjects1Objects = Hashtable.newFrom({"Laser": gdjs.Level_322Code.GDLaserObjects1});gdjs.Level_322Code.eventsList17 = function(runtimeScene) {

{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GoDown"), gdjs.Level_322Code.GDGoDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("GoUp"), gdjs.Level_322Code.GDGoUpObjects2);
{for(var i = 0, len = gdjs.Level_322Code.GDGoUpObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDGoUpObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Level_322Code.GDGoDownObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDGoDownObjects2[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoUp"), gdjs.Level_322Code.GDGoUpObjects2);
gdjs.copyArray(runtimeScene.getObjects("Laser"), gdjs.Level_322Code.GDLaserObjects2);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDGoUpObjects2Objects, gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDLaserObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_322Code.GDLaserObjects2 */
{for(var i = 0, len = gdjs.Level_322Code.GDLaserObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDLaserObjects2[i].clearForces();
}
}{for(var i = 0, len = gdjs.Level_322Code.GDLaserObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDLaserObjects2[i].addForce(0, -(200), 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoLeft"), gdjs.Level_322Code.GDGoLeftObjects2);
gdjs.copyArray(runtimeScene.getObjects("Laser"), gdjs.Level_322Code.GDLaserObjects2);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDGoLeftObjects2Objects, gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDLaserObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_322Code.GDLaserObjects2 */
{for(var i = 0, len = gdjs.Level_322Code.GDLaserObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDLaserObjects2[i].clearForces();
}
}{for(var i = 0, len = gdjs.Level_322Code.GDLaserObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDLaserObjects2[i].addForce(-(200), 0, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoRight"), gdjs.Level_322Code.GDGoRightObjects2);
gdjs.copyArray(runtimeScene.getObjects("Laser"), gdjs.Level_322Code.GDLaserObjects2);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDGoRightObjects2Objects, gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDLaserObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_322Code.GDLaserObjects2 */
{for(var i = 0, len = gdjs.Level_322Code.GDLaserObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDLaserObjects2[i].clearForces();
}
}{for(var i = 0, len = gdjs.Level_322Code.GDLaserObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDLaserObjects2[i].addForce(200, 0, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoDown"), gdjs.Level_322Code.GDGoDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("Laser"), gdjs.Level_322Code.GDLaserObjects2);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDGoDownObjects2Objects, gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDLaserObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_322Code.GDLaserObjects2 */
{for(var i = 0, len = gdjs.Level_322Code.GDLaserObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDLaserObjects2[i].clearForces();
}
}{for(var i = 0, len = gdjs.Level_322Code.GDLaserObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDLaserObjects2[i].addForce(0, 200, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Laser"), gdjs.Level_322Code.GDLaserObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.Level_322Code.GDPlayerHitBoxObjects1);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDPlayerHitBoxObjects1Objects, gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDLaserObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


};gdjs.Level_322Code.eventsList18 = function(runtimeScene) {

{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.Level_322Code.GDPlayerHitBoxObjects1);
{for(var i = 0, len = gdjs.Level_322Code.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDPlayerHitBoxObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Sec");
}{runtimeScene.getVariables().get("timer").setNumber(100);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_322Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.Level_322Code.GDPlayerHitBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.Level_322Code.GDTimerObjects1);
{for(var i = 0, len = gdjs.Level_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDPlayerObjects1[i].setPosition((( gdjs.Level_322Code.GDPlayerHitBoxObjects1.length === 0 ) ? 0 :gdjs.Level_322Code.GDPlayerHitBoxObjects1[0].getPointX("")),(( gdjs.Level_322Code.GDPlayerHitBoxObjects1.length === 0 ) ? 0 :gdjs.Level_322Code.GDPlayerHitBoxObjects1[0].getPointY("")));
}
}{for(var i = 0, len = gdjs.Level_322Code.GDTimerObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDTimerObjects1[i].setString("Time: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("timer")));
}
}}

}


{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), false);
}}

}


{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
gdjs.Level_322Code.condition1IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
}if ( gdjs.Level_322Code.condition0IsTrue_0.val ) {
{
{gdjs.Level_322Code.conditionTrue_1 = gdjs.Level_322Code.condition1IsTrue_0;
gdjs.Level_322Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10948500);
}
}}
if (gdjs.Level_322Code.condition1IsTrue_0.val) {
{gdjs.evtTools.common.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0));
}
{ //Subevents
gdjs.Level_322Code.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("FlyEnemy"), gdjs.Level_322Code.GDFlyEnemyObjects1);
{for(var i = 0, len = gdjs.Level_322Code.GDFlyEnemyObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDFlyEnemyObjects1[i].activateBehavior("PlatformerObject", false);
}
}{}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FlyEnemy"), gdjs.Level_322Code.GDFlyEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("WalkEnemy"), gdjs.Level_322Code.GDWalkEnemyObjects1);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDWalkEnemyObjects1.length;i<l;++i) {
    if ( !(gdjs.Level_322Code.GDWalkEnemyObjects1[i].getAnimation() == 1) ) {
        gdjs.Level_322Code.condition0IsTrue_0.val = true;
        gdjs.Level_322Code.GDWalkEnemyObjects1[k] = gdjs.Level_322Code.GDWalkEnemyObjects1[i];
        ++k;
    }
}
gdjs.Level_322Code.GDWalkEnemyObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Level_322Code.GDFlyEnemyObjects1.length;i<l;++i) {
    if ( !(gdjs.Level_322Code.GDFlyEnemyObjects1[i].getAnimation() == 1) ) {
        gdjs.Level_322Code.condition0IsTrue_0.val = true;
        gdjs.Level_322Code.GDFlyEnemyObjects1[k] = gdjs.Level_322Code.GDFlyEnemyObjects1[i];
        ++k;
    }
}
gdjs.Level_322Code.GDFlyEnemyObjects1.length = k;}if (gdjs.Level_322Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level_322Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FlyEnemy"), gdjs.Level_322Code.GDFlyEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("WalkEnemy"), gdjs.Level_322Code.GDWalkEnemyObjects1);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
gdjs.Level_322Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDWalkEnemyObjects1.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDWalkEnemyObjects1[i].getAnimation() == 1 ) {
        gdjs.Level_322Code.condition0IsTrue_0.val = true;
        gdjs.Level_322Code.GDWalkEnemyObjects1[k] = gdjs.Level_322Code.GDWalkEnemyObjects1[i];
        ++k;
    }
}
gdjs.Level_322Code.GDWalkEnemyObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Level_322Code.GDFlyEnemyObjects1.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDFlyEnemyObjects1[i].getAnimation() == 1 ) {
        gdjs.Level_322Code.condition0IsTrue_0.val = true;
        gdjs.Level_322Code.GDFlyEnemyObjects1[k] = gdjs.Level_322Code.GDFlyEnemyObjects1[i];
        ++k;
    }
}
gdjs.Level_322Code.GDFlyEnemyObjects1.length = k;}if ( gdjs.Level_322Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDWalkEnemyObjects1.length;i<l;++i) {
    if ( !(gdjs.Level_322Code.GDWalkEnemyObjects1[i].getBehavior("Tween").isPlaying("FadeOut")) ) {
        gdjs.Level_322Code.condition1IsTrue_0.val = true;
        gdjs.Level_322Code.GDWalkEnemyObjects1[k] = gdjs.Level_322Code.GDWalkEnemyObjects1[i];
        ++k;
    }
}
gdjs.Level_322Code.GDWalkEnemyObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Level_322Code.GDFlyEnemyObjects1.length;i<l;++i) {
    if ( !(gdjs.Level_322Code.GDFlyEnemyObjects1[i].getBehavior("Tween").isPlaying("FadeOut")) ) {
        gdjs.Level_322Code.condition1IsTrue_0.val = true;
        gdjs.Level_322Code.GDFlyEnemyObjects1[k] = gdjs.Level_322Code.GDFlyEnemyObjects1[i];
        ++k;
    }
}
gdjs.Level_322Code.GDFlyEnemyObjects1.length = k;}}
if (gdjs.Level_322Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level_322Code.GDFlyEnemyObjects1 */
/* Reuse gdjs.Level_322Code.GDWalkEnemyObjects1 */
{for(var i = 0, len = gdjs.Level_322Code.GDWalkEnemyObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDWalkEnemyObjects1[i].getBehavior("Tween").addObjectOpacityTween("FadeOut", 0, "easeOutQuad", 1500, true);
}
for(var i = 0, len = gdjs.Level_322Code.GDFlyEnemyObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDFlyEnemyObjects1[i].getBehavior("Tween").addObjectOpacityTween("FadeOut", 0, "easeOutQuad", 1500, true);
}
}}

}


{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "k");
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
}

}


{


gdjs.Level_322Code.eventsList6(runtimeScene);
}


{


gdjs.Level_322Code.eventsList7(runtimeScene);
}


{


gdjs.Level_322Code.eventsList8(runtimeScene);
}


{


gdjs.Level_322Code.eventsList10(runtimeScene);
}


{


gdjs.Level_322Code.eventsList12(runtimeScene);
}


{


gdjs.Level_322Code.eventsList16(runtimeScene);
}


{


gdjs.Level_322Code.eventsList17(runtimeScene);
}


};

gdjs.Level_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_322Code.GDPlayerObjects1.length = 0;
gdjs.Level_322Code.GDPlayerObjects2.length = 0;
gdjs.Level_322Code.GDPlayerObjects3.length = 0;
gdjs.Level_322Code.GDPlayerObjects4.length = 0;
gdjs.Level_322Code.GDJumpthruObjects1.length = 0;
gdjs.Level_322Code.GDJumpthruObjects2.length = 0;
gdjs.Level_322Code.GDJumpthruObjects3.length = 0;
gdjs.Level_322Code.GDJumpthruObjects4.length = 0;
gdjs.Level_322Code.GDPlatformObjects1.length = 0;
gdjs.Level_322Code.GDPlatformObjects2.length = 0;
gdjs.Level_322Code.GDPlatformObjects3.length = 0;
gdjs.Level_322Code.GDPlatformObjects4.length = 0;
gdjs.Level_322Code.GDTiledFloorPlatformObjects1.length = 0;
gdjs.Level_322Code.GDTiledFloorPlatformObjects2.length = 0;
gdjs.Level_322Code.GDTiledFloorPlatformObjects3.length = 0;
gdjs.Level_322Code.GDTiledFloorPlatformObjects4.length = 0;
gdjs.Level_322Code.GDTiledWallObjects1.length = 0;
gdjs.Level_322Code.GDTiledWallObjects2.length = 0;
gdjs.Level_322Code.GDTiledWallObjects3.length = 0;
gdjs.Level_322Code.GDTiledWallObjects4.length = 0;
gdjs.Level_322Code.GDMovingPlatformObjects1.length = 0;
gdjs.Level_322Code.GDMovingPlatformObjects2.length = 0;
gdjs.Level_322Code.GDMovingPlatformObjects3.length = 0;
gdjs.Level_322Code.GDMovingPlatformObjects4.length = 0;
gdjs.Level_322Code.GDGoLeftObjects1.length = 0;
gdjs.Level_322Code.GDGoLeftObjects2.length = 0;
gdjs.Level_322Code.GDGoLeftObjects3.length = 0;
gdjs.Level_322Code.GDGoLeftObjects4.length = 0;
gdjs.Level_322Code.GDGoRightObjects1.length = 0;
gdjs.Level_322Code.GDGoRightObjects2.length = 0;
gdjs.Level_322Code.GDGoRightObjects3.length = 0;
gdjs.Level_322Code.GDGoRightObjects4.length = 0;
gdjs.Level_322Code.GDLadderObjects1.length = 0;
gdjs.Level_322Code.GDLadderObjects2.length = 0;
gdjs.Level_322Code.GDLadderObjects3.length = 0;
gdjs.Level_322Code.GDLadderObjects4.length = 0;
gdjs.Level_322Code.GDPlayerHitBoxObjects1.length = 0;
gdjs.Level_322Code.GDPlayerHitBoxObjects2.length = 0;
gdjs.Level_322Code.GDPlayerHitBoxObjects3.length = 0;
gdjs.Level_322Code.GDPlayerHitBoxObjects4.length = 0;
gdjs.Level_322Code.GDWalkEnemyObjects1.length = 0;
gdjs.Level_322Code.GDWalkEnemyObjects2.length = 0;
gdjs.Level_322Code.GDWalkEnemyObjects3.length = 0;
gdjs.Level_322Code.GDWalkEnemyObjects4.length = 0;
gdjs.Level_322Code.GDFlyEnemyObjects1.length = 0;
gdjs.Level_322Code.GDFlyEnemyObjects2.length = 0;
gdjs.Level_322Code.GDFlyEnemyObjects3.length = 0;
gdjs.Level_322Code.GDFlyEnemyObjects4.length = 0;
gdjs.Level_322Code.GDTimerObjects1.length = 0;
gdjs.Level_322Code.GDTimerObjects2.length = 0;
gdjs.Level_322Code.GDTimerObjects3.length = 0;
gdjs.Level_322Code.GDTimerObjects4.length = 0;
gdjs.Level_322Code.GDLevelEndObjects1.length = 0;
gdjs.Level_322Code.GDLevelEndObjects2.length = 0;
gdjs.Level_322Code.GDLevelEndObjects3.length = 0;
gdjs.Level_322Code.GDLevelEndObjects4.length = 0;
gdjs.Level_322Code.GDImmortalityObjects1.length = 0;
gdjs.Level_322Code.GDImmortalityObjects2.length = 0;
gdjs.Level_322Code.GDImmortalityObjects3.length = 0;
gdjs.Level_322Code.GDImmortalityObjects4.length = 0;
gdjs.Level_322Code.GDInfiniteTimeObjects1.length = 0;
gdjs.Level_322Code.GDInfiniteTimeObjects2.length = 0;
gdjs.Level_322Code.GDInfiniteTimeObjects3.length = 0;
gdjs.Level_322Code.GDInfiniteTimeObjects4.length = 0;
gdjs.Level_322Code.GDBackgroundObjects1.length = 0;
gdjs.Level_322Code.GDBackgroundObjects2.length = 0;
gdjs.Level_322Code.GDBackgroundObjects3.length = 0;
gdjs.Level_322Code.GDBackgroundObjects4.length = 0;
gdjs.Level_322Code.GDLaserObjects1.length = 0;
gdjs.Level_322Code.GDLaserObjects2.length = 0;
gdjs.Level_322Code.GDLaserObjects3.length = 0;
gdjs.Level_322Code.GDLaserObjects4.length = 0;
gdjs.Level_322Code.GDGoDownObjects1.length = 0;
gdjs.Level_322Code.GDGoDownObjects2.length = 0;
gdjs.Level_322Code.GDGoDownObjects3.length = 0;
gdjs.Level_322Code.GDGoDownObjects4.length = 0;
gdjs.Level_322Code.GDGoUpObjects1.length = 0;
gdjs.Level_322Code.GDGoUpObjects2.length = 0;
gdjs.Level_322Code.GDGoUpObjects3.length = 0;
gdjs.Level_322Code.GDGoUpObjects4.length = 0;

gdjs.Level_322Code.eventsList18(runtimeScene);
return;

}

gdjs['Level_322Code'] = gdjs.Level_322Code;
