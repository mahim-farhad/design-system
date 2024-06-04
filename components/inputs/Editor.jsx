"use client"
// components/Froala.js

import dynamic from 'next/dynamic';

import { useRef, useEffect } from 'react';

import "froala-editor/js/froala_editor.pkgd.min.js";
// import "froala-editor/js/plugins/fullscreen.min.js"

import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
// import "froala-editor/css/plugins/fullscreen.min.css";

import "froala-editor/js/plugins/image.min.js";
import "froala-editor/js/plugins/video.min.js";
import "froala-editor/js/plugins/colors.min.js";
import "froala-editor/js/plugins/emoticons.min.js";
import "froala-editor/js/plugins/font_family.min.js";
import "froala-editor/js/plugins/font_size.min.js";
import "froala-editor/js/plugins/line_height.min.js";
import "froala-editor/js/plugins/lists.min.js";
import "froala-editor/js/plugins/align.min.js";
import "froala-editor/js/plugins/link.min.js";
import "froala-editor/js/plugins/file.min.js";
import "froala-editor/css/plugins/image.min.css";
import "froala-editor/css/plugins/video.min.css";
import "froala-editor/css/plugins/colors.min.css";
import "froala-editor/css/plugins/emoticons.min.css";
import "froala-editor/css/plugins/file.min.css";

// Dynamically import FroalaEditor with no SSR
const FroalaEditor = dynamic(() => import('react-froala-wysiwyg'), {
  ssr: false,
});

export const Froala = ({ model, setModel }) => {
  const ref = useRef(null);

  const config = {
    attribution: false,
    placeholder: 'Start typing...',
    toolbarButtons: {
      moreText: {
        buttons: [
          'bold', 'italic', 'underline', 'strikeThrough', 'subscript',
          'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor',
          'inlineClass', 'inlineStyle', 'clearFormatting',
        ],
      },
      moreParagraph: {
        buttons: [
          'alignLeft', 'alignCenter', 'formatOLSimple', 'alignRight', 'alignJustify',
          'formatOL', 'formatUL', 'paragraphFormat', 'paragraphStyle', 'lineHeight',
          'outdent', 'indent', 'quote',
        ],
      },
      moreRich: {
        buttons: [
          'insertLink', 'insertImage', 'insertVideo', 'insertTable', 'emoticons',
          'fontAwesome', 'specialCharacters', 'embedly', 'insertFile', 'insertHR',
        ],
      },
      moreMisc: {
        buttons: [
          'undo', 'redo', 'fullscreen', 'print', 'getPDF', 'spellChecker',
          'selectAll', 'html', 'help',
        ],
        align: 'right',
        buttonsVisible: 2,
      },
    },
    pluginsEnabled: [
      'table', 'spell', 'quote', 'save', 'quickInsert', 'paragraphFormat',
      'paragraphStyle', 'help', 'draggable', 'align', 'link', 'lists', 'file',
      'image', 'emoticons', 'url', 'video', 'embedly', 'colors', 'entities',
      'inlineClass', 'inlineStyle', 'imageTUI',
    ],
  };

  const handleModelChange = (model) => setModel(model);

  useEffect(() => {
    if (ref.current) ref.current.initialize();
  }, []);

  return (
    <div>
      <FroalaEditor
        ref={ref}
        tag='textarea'
        config={config}
        model={model}
        onModelChange={handleModelChange}
      />
    </div>
  );
};
