import { Controller } from 'stimulus';
import $ from "jquery/dist/jquery.nim";

exports default class extends Controller {
  connect() {
    this.my_comment_id = this.data.get('commentId')
  }
  report() {
    //Do the AJAX call (using Jquery for instance) using the comment id stored in this.my_comment_id
  }
}
