export function setCookie(cname: string, cvalue: string, exSeconds: number) {
  const d = new Date();
  d.setTime(d.getTime() + exSeconds * 1000);
  const expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}
