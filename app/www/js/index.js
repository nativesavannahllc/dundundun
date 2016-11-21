/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var media = null;
var isPlaying = false;
var aboutElem = null;
var appElem = null;

function playSound()
{
    if (media && !isPlaying)
    {
        isPlaying = true;
        media.seekTo(0);
        media.play();
    }
}

function donePlaying()
{
    isPlaying = false;
}

function getAbout()
{
    if (!aboutElem)
    {
        aboutElem = document.getElementById('about');
    }
    return aboutElem;
}

function getApp()
{
    if (!appElem)
    {
        appElem = document.getElementById('app');
    }
    return appElem;
}

function showAbout()
{
    getApp().setAttribute('style', 'display:none;');
    getAbout().setAttribute('style', 'display:block;');
}

function showApp()
{
    getAbout().setAttribute('style', 'display:none;');
    getApp().setAttribute('style', 'display:block;');
}

function openUrl(e)
{
    e.preventDefault();
    console.log(e.target.dataset.url)
    cordova.InAppBrowser.open(e.target.dataset.url, '_system', '');
}

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        media = new Media('/android_asset/www/dundundun.mp3',
            donePlaying,
            // error callback
            function (err) {
                console.log(err);
            }
        );
        window.open = cordova.InAppBrowser.open;

        var links = document.getElementsByClassName('remote');
        for (var i = 0; i < links.length; i++) {
            links[i].addEventListener('click', openUrl, false);
        }

        document.addEventListener("backbutton", showApp, false);
    }
};

app.initialize();