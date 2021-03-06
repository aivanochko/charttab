angular.module('charttab').controller('BookmarkFormCtrl', function (ui, bookmarks) {
    let vm = this;

    vm.isEdit = Boolean(vm.bookmark);

    vm.bookmark = vm.bookmark || {};

    vm.submit = function () {
        let bookmark = angular.copy(vm.bookmark);
        if (vm.isEdit) {
            bookmarks.update(bookmark.id, bookmark).then(ui.hideDialog);
        } else {
            bookmarks.add(bookmark).then(ui.hideDialog);
        }
    };

    vm.cancel = ui.hideDialog;

});
