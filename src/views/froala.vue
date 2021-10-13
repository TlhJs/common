<template>
    <section id="example">
        <froala id="edit" v-model="model" :tag="'textarea'" :config="config" />
    </section>
    <!-- <div id="example"></div> -->
</template>
<script>
// import FroalaEditor from 'froala-editor';

export default {
    name: 'Test',
    data() {
        return {
            config: {
                heightMin: 500,
                language: 'zh_cn',
                toolbarButtons: {
                    moreText: { buttons: ['bold', 'italic', 'underline', 'strikeThrough', 'fontSize', 'textColor', 'backgroundColor'], buttonsVisible: 7 },
                    moreParagraph: { buttons: ['alignLeft', 'alignCenter', 'alignRight', 'alignJustify', 'formatOLSimple', 'paragraphFormat', 'lineHeight', 'outdent', 'indent', 'quote'], buttonsVisible: 11 },
                    moreRich: { buttons: ['insertImage', 'insertFile', 'insertVideo', 'emoticons', 'insertLink', 'insertTable', 'embedly', 'insertHR'], buttonsVisible: 8 },
                    moreMisc: { buttons: ['undo', 'redo', 'html'], align: 'right', buttonsVisible: 3 }
                },
                // toolbarButtons: {},
                toolbarSticky: true, // 操作栏是否自动吸顶
                // toolbarContainer: '.article_editor_toolbar',
                events: {
                    initialized() {
                        console.log('initialized');
                    }
                }
            },
            model: 'Edit Your Content Here!'
        };
    },
    computed: {
        // lll() {
        //     return this.$store.state.list;
        // }
    },
    mounted() {
        this.$nextTick(() => {
            // const editor = new FroalaEditor('#example');
        });
    }

};
</script>
