// ホーム画面に「アプリ」として追加できるようにするための最小限のサービスワーカー
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* 通常どおりネットから読み込む */ });
