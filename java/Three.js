// Three.js r32 - http://github.com/mrdoob/three.js
var THREE = THREE || {};
THREE.Color = function(a) {
    this.autoUpdate = true;
    this.setHex(a)
}
;
THREE.Color.prototype = {
    setRGB: function(a, c, d) {
        this.r = a;
        this.g = c;
        this.b = d;
        if (this.autoUpdate) {
            this.updateHex();
            this.updateStyleString()
        }
    },
    setHex: function(a) {
        this.hex = ~~a & 16777215;
        if (this.autoUpdate) {
            this.updateRGBA();
            this.updateStyleString()
        }
    },
    updateHex: function() {
        this.hex = ~~(this.r * 255) << 16 ^ ~~(this.g * 255) << 8 ^ ~~(this.b * 255)
    },
    updateRGBA: function() {
        this.r = (this.hex >> 16 & 255) / 255;
        this.g = (this.hex >> 8 & 255) / 255;
        this.b = (this.hex & 255) / 255
    },
    updateStyleString: function() {
        this.__styleString = "rgb(" + ~~(this.r * 255) + "," + ~~(this.g * 255) + "," + ~~(this.b * 255) + ")"
    },
    clone: function() {
        return new THREE.Color(this.hex)
    },
    toString: function() {
        return "THREE.Color ( r: " + this.r + ", g: " + this.g + ", b: " + this.b + ", hex: " + this.hex + " )"
    }
};
THREE.Vector2 = function(a, c) {
    this.x = a || 0;
    this.y = c || 0
}
;
THREE.Vector2.prototype = {
    set: function(a, c) {
        this.x = a;
        this.y = c;
        return this
    },
    copy: function(a) {
        this.x = a.x;
        this.y = a.y;
        return this
    },
    addSelf: function(a) {
        this.x += a.x;
        this.y += a.y;
        return this
    },
    add: function(a, c) {
        this.x = a.x + c.x;
        this.y = a.y + c.y;
        return this
    },
    subSelf: function(a) {
        this.x -= a.x;
        this.y -= a.y;
        return this
    },
    sub: function(a, c) {
        this.x = a.x - c.x;
        this.y = a.y - c.y;
        return this
    },
    multiplyScalar: function(a) {
        this.x *= a;
        this.y *= a;
        return this
    },
    unit: function() {
        this.multiplyScalar(1 / this.length());
        return this
    },
    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    },
    lengthSq: function() {
        return this.x * this.x + this.y * this.y
    },
    negate: function() {
        this.x = -this.x;
        this.y = -this.y;
        return this
    },
    clone: function() {
        return new THREE.Vector2(this.x,this.y)
    },
    toString: function() {
        return "THREE.Vector2 (" + this.x + ", " + this.y + ")"
    }
};
THREE.Vector3 = function(a, c, d) {
    this.x = a || 0;
    this.y = c || 0;
    this.z = d || 0
}
;
THREE.Vector3.prototype = {
    set: function(a, c, d) {
        this.x = a;
        this.y = c;
        this.z = d;
        return this
    },
    copy: function(a) {
        this.x = a.x;
        this.y = a.y;
        this.z = a.z;
        return this
    },
    add: function(a, c) {
        this.x = a.x + c.x;
        this.y = a.y + c.y;
        this.z = a.z + c.z;
        return this
    },
    addSelf: function(a) {
        this.x += a.x;
        this.y += a.y;
        this.z += a.z;
        return this
    },
    addScalar: function(a) {
        this.x += a;
        this.y += a;
        this.z += a;
        return this
    },
    sub: function(a, c) {
        this.x = a.x - c.x;
        this.y = a.y - c.y;
        this.z = a.z - c.z;
        return this
    },
    subSelf: function(a) {
        this.x -= a.x;
        this.y -= a.y;
        this.z -= a.z;
        return this
    },
    cross: function(a, c) {
        this.x = a.y * c.z - a.z * c.y;
        this.y = a.z * c.x - a.x * c.z;
        this.z = a.x * c.y - a.y * c.x;
        return this
    },
    crossSelf: function(a) {
        var c = this.x
          , d = this.y
          , f = this.z;
        this.x = d * a.z - f * a.y;
        this.y = f * a.x - c * a.z;
        this.z = c * a.y - d * a.x;
        return this
    },
    multiply: function(a, c) {
        this.x = a.x * c.x;
        this.y = a.y * c.y;
        this.z = a.z * c.z;
        return this
    },
    multiplySelf: function(a) {
        this.x *= a.x;
        this.y *= a.y;
        this.z *= a.z;
        return this
    },
    multiplyScalar: function(a) {
        this.x *= a;
        this.y *= a;
        this.z *= a;
        return this
    },
    divideSelf: function(a) {
        this.x /= a.x;
        this.y /= a.y;
        this.z /= a.z;
        return this
    },
    divideScalar: function(a) {
        this.x /= a;
        this.y /= a;
        this.z /= a;
        return this
    },
    dot: function(a) {
        return this.x * a.x + this.y * a.y + this.z * a.z
    },
    distanceTo: function(a) {
        var c = this.x - a.x
          , d = this.y - a.y;
        a = this.z - a.z;
        return Math.sqrt(c * c + d * d + a * a)
    },
    distanceToSquared: function(a) {
        var c = this.x - a.x
          , d = this.y - a.y;
        a = this.z - a.z;
        return c * c + d * d + a * a
    },
    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    },
    lengthSq: function() {
        return this.x * this.x + this.y * this.y + this.z * this.z
    },
    negate: function() {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z;
        return this
    },
    normalize: function() {
        var a = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        a > 0 ? this.multiplyScalar(1 / a) : this.set(0, 0, 0);
        return this
    },
    setLength: function(a) {
        return this.normalize().multiplyScalar(a)
    },
    isZero: function() {
        return Math.abs(this.x) < 1.0E-4 && Math.abs(this.y) < 1.0E-4 && Math.abs(this.z) < 1.0E-4
    },
    clone: function() {
        return new THREE.Vector3(this.x,this.y,this.z)
    },
    toString: function() {
        return "THREE.Vector3 ( " + this.x + ", " + this.y + ", " + this.z + " )"
    }
};
THREE.Vector4 = function(a, c, d, f) {
    this.x = a || 0;
    this.y = c || 0;
    this.z = d || 0;
    this.w = f || 1
}
;
THREE.Vector4.prototype = {
    set: function(a, c, d, f) {
        this.x = a;
        this.y = c;
        this.z = d;
        this.w = f;
        return this
    },
    copy: function(a) {
        this.x = a.x;
        this.y = a.y;
        this.z = a.z;
        this.w = a.w || 1;
        return this
    },
    add: function(a, c) {
        this.x = a.x + c.x;
        this.y = a.y + c.y;
        this.z = a.z + c.z;
        this.w = a.w + c.w;
        return this
    },
    addSelf: function(a) {
        this.x += a.x;
        this.y += a.y;
        this.z += a.z;
        this.w += a.w;
        return this
    },
    sub: function(a, c) {
        this.x = a.x - c.x;
        this.y = a.y - c.y;
        this.z = a.z - c.z;
        this.w = a.w - c.w;
        return this
    },
    subSelf: function(a) {
        this.x -= a.x;
        this.y -= a.y;
        this.z -= a.z;
        this.w -= a.w;
        return this
    },
    multiplyScalar: function(a) {
        this.x *= a;
        this.y *= a;
        this.z *= a;
        this.w *= a;
        return this
    },
    divideScalar: function(a) {
        this.x /= a;
        this.y /= a;
        this.z /= a;
        this.w /= a;
        return this
    },
    lerpSelf: function(a, c) {
        this.x += (a.x - this.x) * c;
        this.y += (a.y - this.y) * c;
        this.z += (a.z - this.z) * c;
        this.w += (a.w - this.w) * c
    },
    clone: function() {
        return new THREE.Vector4(this.x,this.y,this.z,this.w)
    },
    toString: function() {
        return "THREE.Vector4 (" + this.x + ", " + this.y + ", " + this.z + ", " + this.w + ")"
    }
};
THREE.Ray = function(a, c) {
    this.origin = a || new THREE.Vector3;
    this.direction = c || new THREE.Vector3
}
;
THREE.Ray.prototype = {
    intersectScene: function(a) {
        var c, d, f = a.objects, g = [];
        a = 0;
        for (c = f.length; a < c; a++) {
            d = f[a];
            if (d instanceof THREE.Mesh)
                g = g.concat(this.intersectObject(d))
        }
        g.sort(function(h, o) {
            return h.distance - o.distance
        });
        return g
    },
    intersectObject: function(a) {
        function c(K, p, U, F) {
            F = F.clone().subSelf(p);
            U = U.clone().subSelf(p);
            var e = K.clone().subSelf(p);
            K = F.dot(F);
            p = F.dot(U);
            F = F.dot(e);
            var j = U.dot(U);
            U = U.dot(e);
            e = 1 / (K * j - p * p);
            j = (j * F - p * U) * e;
            K = (K * U - p * F) * e;
            return j > 0 && K > 0 && j + K < 1
        }
        var d, f, g, h, o, b, i, k, y, z, u, x = a.geometry, H = x.vertices, J = [];
        d = 0;
        for (f = x.faces.length; d < f; d++) {
            g = x.faces[d];
            z = this.origin.clone();
            u = this.direction.clone();
            h = a.matrix.multiplyVector3(H[g.a].position.clone());
            o = a.matrix.multiplyVector3(H[g.b].position.clone());
            b = a.matrix.multiplyVector3(H[g.c].position.clone());
            i = g instanceof THREE.Face4 ? a.matrix.multiplyVector3(H[g.d].position.clone()) : null;
            k = a.rotationMatrix.multiplyVector3(g.normal.clone());
            y = u.dot(k);
            if (y < 0) {
                k = k.dot((new THREE.Vector3).sub(h, z)) / y;
                z = z.addSelf(u.multiplyScalar(k));
                if (g instanceof THREE.Face3) {
                    if (c(z, h, o, b)) {
                        g = {
                            distance: this.origin.distanceTo(z),
                            point: z,
                            face: g,
                            object: a
                        };
                        J.push(g)
                    }
                } else if (g instanceof THREE.Face4)
                    if (c(z, h, o, i) || c(z, o, b, i)) {
                        g = {
                            distance: this.origin.distanceTo(z),
                            point: z,
                            face: g,
                            object: a
                        };
                        J.push(g)
                    }
            }
        }
        return J
    }
};
THREE.Rectangle = function() {
    function a() {
        h = f - c;
        o = g - d
    }
    var c, d, f, g, h, o, b = true;
    this.getX = function() {
        return c
    }
    ;
    this.getY = function() {
        return d
    }
    ;
    this.getWidth = function() {
        return h
    }
    ;
    this.getHeight = function() {
        return o
    }
    ;
    this.getLeft = function() {
        return c
    }
    ;
    this.getTop = function() {
        return d
    }
    ;
    this.getRight = function() {
        return f
    }
    ;
    this.getBottom = function() {
        return g
    }
    ;
    this.set = function(i, k, y, z) {
        b = false;
        c = i;
        d = k;
        f = y;
        g = z;
        a()
    }
    ;
    this.addPoint = function(i, k) {
        if (b) {
            b = false;
            c = i;
            d = k;
            f = i;
            g = k
        } else {
            c = c < i ? c : i;
            d = d < k ? d : k;
            f = f > i ? f : i;
            g = g > k ? g : k
        }
        a()
    }
    ;
    this.add3Points = function(i, k, y, z, u, x) {
        if (b) {
            b = false;
            c = i < y ? i < u ? i : u : y < u ? y : u;
            d = k < z ? k < x ? k : x : z < x ? z : x;
            f = i > y ? i > u ? i : u : y > u ? y : u;
            g = k > z ? k > x ? k : x : z > x ? z : x
        } else {
            c = i < y ? i < u ? i < c ? i : c : u < c ? u : c : y < u ? y < c ? y : c : u < c ? u : c;
            d = k < z ? k < x ? k < d ? k : d : x < d ? x : d : z < x ? z < d ? z : d : x < d ? x : d;
            f = i > y ? i > u ? i > f ? i : f : u > f ? u : f : y > u ? y > f ? y : f : u > f ? u : f;
            g = k > z ? k > x ? k > g ? k : g : x > g ? x : g : z > x ? z > g ? z : g : x > g ? x : g
        }
        a()
    }
    ;
    this.addRectangle = function(i) {
        if (b) {
            b = false;
            c = i.getLeft();
            d = i.getTop();
            f = i.getRight();
            g = i.getBottom()
        } else {
            c = c < i.getLeft() ? c : i.getLeft();
            d = d < i.getTop() ? d : i.getTop();
            f = f > i.getRight() ? f : i.getRight();
            g = g > i.getBottom() ? g : i.getBottom()
        }
        a()
    }
    ;
    this.inflate = function(i) {
        c -= i;
        d -= i;
        f += i;
        g += i;
        a()
    }
    ;
    this.minSelf = function(i) {
        c = c > i.getLeft() ? c : i.getLeft();
        d = d > i.getTop() ? d : i.getTop();
        f = f < i.getRight() ? f : i.getRight();
        g = g < i.getBottom() ? g : i.getBottom();
        a()
    }
    ;
    this.instersects = function(i) {
        return Math.min(f, i.getRight()) - Math.max(c, i.getLeft()) >= 0 && Math.min(g, i.getBottom()) - Math.max(d, i.getTop()) >= 0
    }
    ;
    this.empty = function() {
        b = true;
        g = f = d = c = 0;
        a()
    }
    ;
    this.isEmpty = function() {
        return b
    }
    ;
    this.toString = function() {
        return "THREE.Rectangle ( left: " + c + ", right: " + f + ", top: " + d + ", bottom: " + g + ", width: " + h + ", height: " + o + " )"
    }
}
;
THREE.Matrix3 = function() {
    this.m = []
}
;
THREE.Matrix3.prototype = {
    transpose: function() {
        var a;
        a = this.m[1];
        this.m[1] = this.m[3];
        this.m[3] = a;
        a = this.m[2];
        this.m[2] = this.m[6];
        this.m[6] = a;
        a = this.m[5];
        this.m[5] = this.m[7];
        this.m[7] = a;
        return this
    }
};
THREE.Matrix4 = function(a, c, d, f, g, h, o, b, i, k, y, z, u, x, H, J) {
    this.n11 = a || 1;
    this.n12 = c || 0;
    this.n13 = d || 0;
    this.n14 = f || 0;
    this.n21 = g || 0;
    this.n22 = h || 1;
    this.n23 = o || 0;
    this.n24 = b || 0;
    this.n31 = i || 0;
    this.n32 = k || 0;
    this.n33 = y || 1;
    this.n34 = z || 0;
    this.n41 = u || 0;
    this.n42 = x || 0;
    this.n43 = H || 0;
    this.n44 = J || 1;
    this.flat = Array(16);
    this.m33 = new THREE.Matrix3
}
;
THREE.Matrix4.prototype = {
    identity: function() {
        this.n11 = 1;
        this.n21 = this.n14 = this.n13 = this.n12 = 0;
        this.n22 = 1;
        this.n32 = this.n31 = this.n24 = this.n23 = 0;
        this.n33 = 1;
        this.n43 = this.n42 = this.n41 = this.n34 = 0;
        this.n44 = 1;
        return this
    },
    set: function(a, c, d, f, g, h, o, b, i, k, y, z, u, x, H, J) {
        this.n11 = a;
        this.n12 = c;
        this.n13 = d;
        this.n14 = f;
        this.n21 = g;
        this.n22 = h;
        this.n23 = o;
        this.n24 = b;
        this.n31 = i;
        this.n32 = k;
        this.n33 = y;
        this.n34 = z;
        this.n41 = u;
        this.n42 = x;
        this.n43 = H;
        this.n44 = J;
        return this
    },
    copy: function(a) {
        this.n11 = a.n11;
        this.n12 = a.n12;
        this.n13 = a.n13;
        this.n14 = a.n14;
        this.n21 = a.n21;
        this.n22 = a.n22;
        this.n23 = a.n23;
        this.n24 = a.n24;
        this.n31 = a.n31;
        this.n32 = a.n32;
        this.n33 = a.n33;
        this.n34 = a.n34;
        this.n41 = a.n41;
        this.n42 = a.n42;
        this.n43 = a.n43;
        this.n44 = a.n44;
        return this
    },
    lookAt: function(a, c, d) {
        var f = THREE.Matrix4.__tmpVec1
          , g = THREE.Matrix4.__tmpVec2
          , h = THREE.Matrix4.__tmpVec3;
        h.sub(a, c).normalize();
        f.cross(d, h).normalize();
        g.cross(h, f).normalize();
        this.n11 = f.x;
        this.n12 = f.y;
        this.n13 = f.z;
        this.n14 = -f.dot(a);
        this.n21 = g.x;
        this.n22 = g.y;
        this.n23 = g.z;
        this.n24 = -g.dot(a);
        this.n31 = h.x;
        this.n32 = h.y;
        this.n33 = h.z;
        this.n34 = -h.dot(a);
        this.n43 = this.n42 = this.n41 = 0;
        this.n44 = 1;
        return this
    },
    multiplyVector3: function(a) {
        var c = a.x
          , d = a.y
          , f = a.z
          , g = 1 / (this.n41 * c + this.n42 * d + this.n43 * f + this.n44);
        a.x = (this.n11 * c + this.n12 * d + this.n13 * f + this.n14) * g;
        a.y = (this.n21 * c + this.n22 * d + this.n23 * f + this.n24) * g;
        a.z = (this.n31 * c + this.n32 * d + this.n33 * f + this.n34) * g;
        return a
    },
    multiplyVector4: function(a) {
        var c = a.x
          , d = a.y
          , f = a.z
          , g = a.w;
        a.x = this.n11 * c + this.n12 * d + this.n13 * f + this.n14 * g;
        a.y = this.n21 * c + this.n22 * d + this.n23 * f + this.n24 * g;
        a.z = this.n31 * c + this.n32 * d + this.n33 * f + this.n34 * g;
        a.w = this.n41 * c + this.n42 * d + this.n43 * f + this.n44 * g;
        return a
    },
    crossVector: function(a) {
        var c = new THREE.Vector4;
        c.x = this.n11 * a.x + this.n12 * a.y + this.n13 * a.z + this.n14 * a.w;
        c.y = this.n21 * a.x + this.n22 * a.y + this.n23 * a.z + this.n24 * a.w;
        c.z = this.n31 * a.x + this.n32 * a.y + this.n33 * a.z + this.n34 * a.w;
        c.w = a.w ? this.n41 * a.x + this.n42 * a.y + this.n43 * a.z + this.n44 * a.w : 1;
        return c
    },
    multiply: function(a, c) {
        var d = a.n11
          , f = a.n12
          , g = a.n13
          , h = a.n14
          , o = a.n21
          , b = a.n22
          , i = a.n23
          , k = a.n24
          , y = a.n31
          , z = a.n32
          , u = a.n33
          , x = a.n34
          , H = a.n41
          , J = a.n42
          , K = a.n43
          , p = a.n44
          , U = c.n11
          , F = c.n12
          , e = c.n13
          , j = c.n14
          , q = c.n21
          , l = c.n22
          , r = c.n23
          , C = c.n24
          , m = c.n31
          , t = c.n32
          , v = c.n33
          , s = c.n34
          , n = c.n41
          , E = c.n42
          , A = c.n43
          , O = c.n44;
        this.n11 = d * U + f * q + g * m + h * n;
        this.n12 = d * F + f * l + g * t + h * E;
        this.n13 = d * e + f * r + g * v + h * A;
        this.n14 = d * j + f * C + g * s + h * O;
        this.n21 = o * U + b * q + i * m + k * n;
        this.n22 = o * F + b * l + i * t + k * E;
        this.n23 = o * e + b * r + i * v + k * A;
        this.n24 = o * j + b * C + i * s + k * O;
        this.n31 = y * U + z * q + u * m + x * n;
        this.n32 = y * F + z * l + u * t + x * E;
        this.n33 = y * e + z * r + u * v + x * A;
        this.n34 = y * j + z * C + u * s + x * O;
        this.n41 = H * U + J * q + K * m + p * n;
        this.n42 = H * F + J * l + K * t + p * E;
        this.n43 = H * e + J * r + K * v + p * A;
        this.n44 = H * j + J * C + K * s + p * O;
        return this
    },
    multiplySelf: function(a) {
        var c = this.n11
          , d = this.n12
          , f = this.n13
          , g = this.n14
          , h = this.n21
          , o = this.n22
          , b = this.n23
          , i = this.n24
          , k = this.n31
          , y = this.n32
          , z = this.n33
          , u = this.n34
          , x = this.n41
          , H = this.n42
          , J = this.n43
          , K = this.n44
          , p = a.n11
          , U = a.n21
          , F = a.n31
          , e = a.n41
          , j = a.n12
          , q = a.n22
          , l = a.n32
          , r = a.n42
          , C = a.n13
          , m = a.n23
          , t = a.n33
          , v = a.n43
          , s = a.n14
          , n = a.n24
          , E = a.n34;
        a = a.n44;
        this.n11 = c * p + d * U + f * F + g * e;
        this.n12 = c * j + d * q + f * l + g * r;
        this.n13 = c * C + d * m + f * t + g * v;
        this.n14 = c * s + d * n + f * E + g * a;
        this.n21 = h * p + o * U + b * F + i * e;
        this.n22 = h * j + o * q + b * l + i * r;
        this.n23 = h * C + o * m + b * t + i * v;
        this.n24 = h * s + o * n + b * E + i * a;
        this.n31 = k * p + y * U + z * F + u * e;
        this.n32 = k * j + y * q + z * l + u * r;
        this.n33 = k * C + y * m + z * t + u * v;
        this.n34 = k * s + y * n + z * E + u * a;
        this.n41 = x * p + H * U + J * F + K * e;
        this.n42 = x * j + H * q + J * l + K * r;
        this.n43 = x * C + H * m + J * t + K * v;
        this.n44 = x * s + H * n + J * E + K * a;
        return this
    },
    multiplyScalar: function(a) {
        this.n11 *= a;
        this.n12 *= a;
        this.n13 *= a;
        this.n14 *= a;
        this.n21 *= a;
        this.n22 *= a;
        this.n23 *= a;
        this.n24 *= a;
        this.n31 *= a;
        this.n32 *= a;
        this.n33 *= a;
        this.n34 *= a;
        this.n41 *= a;
        this.n42 *= a;
        this.n43 *= a;
        this.n44 *= a;
        return this
    },
    determinant: function() {
        var a = this.n11
          , c = this.n12
          , d = this.n13
          , f = this.n14
          , g = this.n21
          , h = this.n22
          , o = this.n23
          , b = this.n24
          , i = this.n31
          , k = this.n32
          , y = this.n33
          , z = this.n34
          , u = this.n41
          , x = this.n42
          , H = this.n43
          , J = this.n44;
        return f * o * k * u - d * b * k * u - f * h * y * u + c * b * y * u + d * h * z * u - c * o * z * u - f * o * i * x + d * b * i * x + f * g * y * x - a * b * y * x - d * g * z * x + a * o * z * x + f * h * i * H - c * b * i * H - f * g * k * H + a * b * k * H + c * g * z * H - a * h * z * H - d * h * i * J + c * o * i * J + d * g * k * J - a * o * k * J - c * g * y * J + a * h * y * J
    },
    transpose: function() {
        function a(c, d, f) {
            var g = c[d];
            c[d] = c[f];
            c[f] = g
        }
        a(this, "n21", "n12");
        a(this, "n31", "n13");
        a(this, "n32", "n23");
        a(this, "n41", "n14");
        a(this, "n42", "n24");
        a(this, "n43", "n34");
        return this
    },
    clone: function() {
        var a = new THREE.Matrix4;
        a.n11 = this.n11;
        a.n12 = this.n12;
        a.n13 = this.n13;
        a.n14 = this.n14;
        a.n21 = this.n21;
        a.n22 = this.n22;
        a.n23 = this.n23;
        a.n24 = this.n24;
        a.n31 = this.n31;
        a.n32 = this.n32;
        a.n33 = this.n33;
        a.n34 = this.n34;
        a.n41 = this.n41;
        a.n42 = this.n42;
        a.n43 = this.n43;
        a.n44 = this.n44;
        return a
    },
    flatten: function() {
        this.flat[0] = this.n11;
        this.flat[1] = this.n21;
        this.flat[2] = this.n31;
        this.flat[3] = this.n41;
        this.flat[4] = this.n12;
        this.flat[5] = this.n22;
        this.flat[6] = this.n32;
        this.flat[7] = this.n42;
        this.flat[8] = this.n13;
        this.flat[9] = this.n23;
        this.flat[10] = this.n33;
        this.flat[11] = this.n43;
        this.flat[12] = this.n14;
        this.flat[13] = this.n24;
        this.flat[14] = this.n34;
        this.flat[15] = this.n44;
        return this.flat
    },
    setTranslation: function(a, c, d) {
        this.set(1, 0, 0, a, 0, 1, 0, c, 0, 0, 1, d, 0, 0, 0, 1);
        return this
    },
    setScale: function(a, c, d) {
        this.set(a, 0, 0, 0, 0, c, 0, 0, 0, 0, d, 0, 0, 0, 0, 1);
        return this
    },
    setRotX: function(a) {
        var c = Math.cos(a);
        a = Math.sin(a);
        this.set(1, 0, 0, 0, 0, c, -a, 0, 0, a, c, 0, 0, 0, 0, 1);
        return this
    },
    setRotY: function(a) {
        var c = Math.cos(a);
        a = Math.sin(a);
        this.set(c, 0, a, 0, 0, 1, 0, 0, -a, 0, c, 0, 0, 0, 0, 1);
        return this
    },
    setRotZ: function(a) {
        var c = Math.cos(a);
        a = Math.sin(a);
        this.set(c, -a, 0, 0, a, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return this
    },
    setRotAxis: function(a, c) {
        var d = Math.cos(c)
          , f = Math.sin(c)
          , g = 1 - d
          , h = a.x
          , o = a.y
          , b = a.z
          , i = g * h
          , k = g * o;
        this.set(i * h + d, i * o - f * b, i * b + f * o, 0, i * o + f * b, k * o + d, k * b - f * h, 0, i * b - f * o, k * b + f * h, g * b * b + d, 0, 0, 0, 0, 1);
        return this
    },
    toString: function() {
        return "| " + this.n11 + " " + this.n12 + " " + this.n13 + " " + this.n14 + " |\n| " + this.n21 + " " + this.n22 + " " + this.n23 + " " + this.n24 + " |\n| " + this.n31 + " " + this.n32 + " " + this.n33 + " " + this.n34 + " |\n| " + this.n41 + " " + this.n42 + " " + this.n43 + " " + this.n44 + " |"
    }
};
THREE.Matrix4.translationMatrix = function(a, c, d) {
    var f = new THREE.Matrix4;
    f.setTranslation(a, c, d);
    return f
}
;
THREE.Matrix4.scaleMatrix = function(a, c, d) {
    var f = new THREE.Matrix4;
    f.setScale(a, c, d);
    return f
}
;
THREE.Matrix4.rotationXMatrix = function(a) {
    var c = new THREE.Matrix4;
    c.setRotX(a);
    return c
}
;
THREE.Matrix4.rotationYMatrix = function(a) {
    var c = new THREE.Matrix4;
    c.setRotY(a);
    return c
}
;
THREE.Matrix4.rotationZMatrix = function(a) {
    var c = new THREE.Matrix4;
    c.setRotZ(a);
    return c
}
;
THREE.Matrix4.rotationAxisAngleMatrix = function(a, c) {
    var d = new THREE.Matrix4;
    d.setRotAxis(a, c);
    return d
}
;
THREE.Matrix4.makeInvert = function(a) {
    var c = a.n11
      , d = a.n12
      , f = a.n13
      , g = a.n14
      , h = a.n21
      , o = a.n22
      , b = a.n23
      , i = a.n24
      , k = a.n31
      , y = a.n32
      , z = a.n33
      , u = a.n34
      , x = a.n41
      , H = a.n42
      , J = a.n43
      , K = a.n44
      , p = new THREE.Matrix4;
    p.n11 = b * u * H - i * z * H + i * y * J - o * u * J - b * y * K + o * z * K;
    p.n12 = g * z * H - f * u * H - g * y * J + d * u * J + f * y * K - d * z * K;
    p.n13 = f * i * H - g * b * H + g * o * J - d * i * J - f * o * K + d * b * K;
    p.n14 = g * b * y - f * i * y - g * o * z + d * i * z + f * o * u - d * b * u;
    p.n21 = i * z * x - b * u * x - i * k * J + h * u * J + b * k * K - h * z * K;
    p.n22 = f * u * x - g * z * x + g * k * J - c * u * J - f * k * K + c * z * K;
    p.n23 = g * b * x - f * i * x - g * h * J + c * i * J + f * h * K - c * b * K;
    p.n24 = f * i * k - g * b * k + g * h * z - c * i * z - f * h * u + c * b * u;
    p.n31 = o * u * x - i * y * x + i * k * H - h * u * H - o * k * K + h * y * K;
    p.n32 = g * y * x - d * u * x - g * k * H + c * u * H + d * k * K - c * y * K;
    p.n33 = f * i * x - g * o * x + g * h * H - c * i * H - d * h * K + c * o * K;
    p.n34 = g * o * k - d * i * k - g * h * y + c * i * y + d * h * u - c * o * u;
    p.n41 = b * y * x - o * z * x - b * k * H + h * z * H + o * k * J - h * y * J;
    p.n42 = d * z * x - f * y * x + f * k * H - c * z * H - d * k * J + c * y * J;
    p.n43 = f * o * x - d * b * x - f * h * H + c * b * H + d * h * J - c * o * J;
    p.n44 = d * b * k - f * o * k + f * h * y - c * b * y - d * h * z + c * o * z;
    p.multiplyScalar(1 / a.determinant());
    return p
}
;
THREE.Matrix4.makeInvert3x3 = function(a) {
    var c = a.flatten();
    a = a.m33;
    var d = c[10] * c[5] - c[6] * c[9]
      , f = -c[10] * c[1] + c[2] * c[9]
      , g = c[6] * c[1] - c[2] * c[5]
      , h = -c[10] * c[4] + c[6] * c[8]
      , o = c[10] * c[0] - c[2] * c[8]
      , b = -c[6] * c[0] + c[2] * c[4]
      , i = c[9] * c[4] - c[5] * c[8]
      , k = -c[9] * c[0] + c[1] * c[8]
      , y = c[5] * c[0] - c[1] * c[4];
    c = c[0] * d + c[1] * h + c[2] * i;
    if (c == 0)
        throw "matrix not invertible";
    c = 1 / c;
    a.m[0] = c * d;
    a.m[1] = c * f;
    a.m[2] = c * g;
    a.m[3] = c * h;
    a.m[4] = c * o;
    a.m[5] = c * b;
    a.m[6] = c * i;
    a.m[7] = c * k;
    a.m[8] = c * y;
    return a
}
;
THREE.Matrix4.makeFrustum = function(a, c, d, f, g, h) {
    var o, b, i;
    o = new THREE.Matrix4;
    b = 2 * g / (c - a);
    i = 2 * g / (f - d);
    a = (c + a) / (c - a);
    d = (f + d) / (f - d);
    f = -(h + g) / (h - g);
    g = -2 * h * g / (h - g);
    o.n11 = b;
    o.n12 = 0;
    o.n13 = a;
    o.n14 = 0;
    o.n21 = 0;
    o.n22 = i;
    o.n23 = d;
    o.n24 = 0;
    o.n31 = 0;
    o.n32 = 0;
    o.n33 = f;
    o.n34 = g;
    o.n41 = 0;
    o.n42 = 0;
    o.n43 = -1;
    o.n44 = 0;
    return o
}
;
THREE.Matrix4.makePerspective = function(a, c, d, f) {
    var g;
    a = d * Math.tan(a * Math.PI / 360);
    g = -a;
    return THREE.Matrix4.makeFrustum(g * c, a * c, g, a, d, f)
}
;
THREE.Matrix4.makeOrtho = function(a, c, d, f, g, h) {
    var o, b, i, k;
    o = new THREE.Matrix4;
    b = c - a;
    i = d - f;
    k = h - g;
    a = (c + a) / b;
    d = (d + f) / i;
    g = (h + g) / k;
    o.n11 = 2 / b;
    o.n12 = 0;
    o.n13 = 0;
    o.n14 = -a;
    o.n21 = 0;
    o.n22 = 2 / i;
    o.n23 = 0;
    o.n24 = -d;
    o.n31 = 0;
    o.n32 = 0;
    o.n33 = -2 / k;
    o.n34 = -g;
    o.n41 = 0;
    o.n42 = 0;
    o.n43 = 0;
    o.n44 = 1;
    return o
}
;
THREE.Matrix4.__tmpVec1 = new THREE.Vector3;
THREE.Matrix4.__tmpVec2 = new THREE.Vector3;
THREE.Matrix4.__tmpVec3 = new THREE.Vector3;
THREE.Vertex = function(a, c) {
    this.position = a || new THREE.Vector3;
    this.positionWorld = new THREE.Vector3;
    this.positionScreen = new THREE.Vector4;
    this.normal = c || new THREE.Vector3;
    this.normalWorld = new THREE.Vector3;
    this.normalScreen = new THREE.Vector3;
    this.tangent = new THREE.Vector4;
    this.__visible = true
}
;
THREE.Vertex.prototype = {
    toString: function() {
        return "THREE.Vertex ( position: " + this.position + ", normal: " + this.normal + " )"
    }
};
THREE.Face3 = function(a, c, d, f, g) {
    this.a = a;
    this.b = c;
    this.c = d;
    this.centroid = new THREE.Vector3;
    this.normal = f instanceof THREE.Vector3 ? f : new THREE.Vector3;
    this.vertexNormals = f instanceof Array ? f : [];
    this.materials = g instanceof Array ? g : [g]
}
;
THREE.Face3.prototype = {
    toString: function() {
        return "THREE.Face3 ( " + this.a + ", " + this.b + ", " + this.c + " )"
    }
};
THREE.Face4 = function(a, c, d, f, g, h) {
    this.a = a;
    this.b = c;
    this.c = d;
    this.d = f;
    this.centroid = new THREE.Vector3;
    this.normal = g instanceof THREE.Vector3 ? g : new THREE.Vector3;
    this.vertexNormals = g instanceof Array ? g : [];
    this.materials = h instanceof Array ? h : [h]
}
;
THREE.Face4.prototype = {
    toString: function() {
        return "THREE.Face4 ( " + this.a + ", " + this.b + ", " + this.c + " " + this.d + " )"
    }
};
THREE.UV = function(a, c) {
    this.u = a || 0;
    this.v = c || 0
}
;
THREE.UV.prototype = {
    copy: function(a) {
        this.u = a.u;
        this.v = a.v
    },
    toString: function() {
        return "THREE.UV (" + this.u + ", " + this.v + ")"
    }
};
THREE.Geometry = function() {
    this.vertices = [];
    this.faces = [];
    this.uvs = [];
    this.boundingSphere = this.boundingBox = null;
    this.geometryChunks = {};
    this.hasTangents = false
}
;
THREE.Geometry.prototype = {
    computeCentroids: function() {
        var a, c, d;
        a = 0;
        for (c = this.faces.length; a < c; a++) {
            d = this.faces[a];
            d.centroid.set(0, 0, 0);
            if (d instanceof THREE.Face3) {
                d.centroid.addSelf(this.vertices[d.a].position);
                d.centroid.addSelf(this.vertices[d.b].position);
                d.centroid.addSelf(this.vertices[d.c].position);
                d.centroid.divideScalar(3)
            } else if (d instanceof THREE.Face4) {
                d.centroid.addSelf(this.vertices[d.a].position);
                d.centroid.addSelf(this.vertices[d.b].position);
                d.centroid.addSelf(this.vertices[d.c].position);
                d.centroid.addSelf(this.vertices[d.d].position);
                d.centroid.divideScalar(4)
            }
        }
    },
    computeFaceNormals: function(a) {
        var c, d, f, g, h, o, b = new THREE.Vector3, i = new THREE.Vector3;
        f = 0;
        for (g = this.vertices.length; f < g; f++) {
            h = this.vertices[f];
            h.normal.set(0, 0, 0)
        }
        f = 0;
        for (g = this.faces.length; f < g; f++) {
            h = this.faces[f];
            if (a && h.vertexNormals.length) {
                b.set(0, 0, 0);
                c = 0;
                for (d = h.normal.length; c < d; c++)
                    b.addSelf(h.vertexNormals[c]);
                b.divideScalar(3)
            } else {
                c = this.vertices[h.a];
                d = this.vertices[h.b];
                o = this.vertices[h.c];
                b.sub(o.position, d.position);
                i.sub(c.position, d.position);
                b.crossSelf(i)
            }
            b.isZero() || b.normalize();
            h.normal.copy(b)
        }
    },
    computeVertexNormals: function() {
        var a, c, d, f;
        if (this.__tmpVertices == undefined) {
            f = this.__tmpVertices = Array(this.vertices.length);
            a = 0;
            for (c = this.vertices.length; a < c; a++)
                f[a] = new THREE.Vector3;
            a = 0;
            for (c = this.faces.length; a < c; a++) {
                d = this.faces[a];
                if (d instanceof THREE.Face3)
                    d.vertexNormals = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
                else if (d instanceof THREE.Face4)
                    d.vertexNormals = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3]
            }
        } else {
            f = this.__tmpVertices;
            a = 0;
            for (c = this.vertices.length; a < c; a++)
                f[a].set(0, 0, 0)
        }
        a = 0;
        for (c = this.faces.length; a < c; a++) {
            d = this.faces[a];
            if (d instanceof THREE.Face3) {
                f[d.a].addSelf(d.normal);
                f[d.b].addSelf(d.normal);
                f[d.c].addSelf(d.normal)
            } else if (d instanceof THREE.Face4) {
                f[d.a].addSelf(d.normal);
                f[d.b].addSelf(d.normal);
                f[d.c].addSelf(d.normal);
                f[d.d].addSelf(d.normal)
            }
        }
        a = 0;
        for (c = this.vertices.length; a < c; a++)
            f[a].normalize();
        a = 0;
        for (c = this.faces.length; a < c; a++) {
            d = this.faces[a];
            if (d instanceof THREE.Face3) {
                d.vertexNormals[0].copy(f[d.a]);
                d.vertexNormals[1].copy(f[d.b]);
                d.vertexNormals[2].copy(f[d.c])
            } else if (d instanceof THREE.Face4) {
                d.vertexNormals[0].copy(f[d.a]);
                d.vertexNormals[1].copy(f[d.b]);
                d.vertexNormals[2].copy(f[d.c]);
                d.vertexNormals[3].copy(f[d.d])
            }
        }
    },
    computeTangents: function() {
        function a(s, n, E, A, O, N, G) {
            h = s.vertices[n].position;
            o = s.vertices[E].position;
            b = s.vertices[A].position;
            i = g[O];
            k = g[N];
            y = g[G];
            z = o.x - h.x;
            u = b.x - h.x;
            x = o.y - h.y;
            H = b.y - h.y;
            J = o.z - h.z;
            K = b.z - h.z;
            p = k.u - i.u;
            U = y.u - i.u;
            F = k.v - i.v;
            e = y.v - i.v;
            j = 1 / (p * e - U * F);
            r.set((e * z - F * u) * j, (e * x - F * H) * j, (e * J - F * K) * j);
            C.set((p * u - U * z) * j, (p * H - U * x) * j, (p * K - U * J) * j);
            q[n].addSelf(r);
            q[E].addSelf(r);
            q[A].addSelf(r);
            l[n].addSelf(C);
            l[E].addSelf(C);
            l[A].addSelf(C)
        }
        var c, d, f, g, h, o, b, i, k, y, z, u, x, H, J, K, p, U, F, e, j, q = [], l = [], r = new THREE.Vector3, C = new THREE.Vector3, m = new THREE.Vector3, t = new THREE.Vector3, v = new THREE.Vector3;
        c = 0;
        for (d = this.vertices.length; c < d; c++) {
            q[c] = new THREE.Vector3;
            l[c] = new THREE.Vector3
        }
        c = 0;
        for (d = this.faces.length; c < d; c++) {
            f = this.faces[c];
            g = this.uvs[c];
            if (f instanceof THREE.Face3) {
                a(this, f.a, f.b, f.c, 0, 1, 2);
                this.vertices[f.a].normal.copy(f.vertexNormals[0]);
                this.vertices[f.b].normal.copy(f.vertexNormals[1]);
                this.vertices[f.c].normal.copy(f.vertexNormals[2])
            } else if (f instanceof THREE.Face4) {
                a(this, f.a, f.b, f.c, 0, 1, 2);
                a(this, f.a, f.b, f.d, 0, 1, 3);
                this.vertices[f.a].normal.copy(f.vertexNormals[0]);
                this.vertices[f.b].normal.copy(f.vertexNormals[1]);
                this.vertices[f.c].normal.copy(f.vertexNormals[2]);
                this.vertices[f.d].normal.copy(f.vertexNormals[3])
            }
        }
        c = 0;
        for (d = this.vertices.length; c < d; c++) {
            v.copy(this.vertices[c].normal);
            f = q[c];
            m.copy(f);
            m.subSelf(v.multiplyScalar(v.dot(f))).normalize();
            t.cross(this.vertices[c].normal, f);
            f = t.dot(l[c]);
            f = f < 0 ? -1 : 1;
            this.vertices[c].tangent.set(m.x, m.y, m.z, f)
        }
        this.hasTangents = true
    },
    computeBoundingBox: function() {
        var a;
        if (this.vertices.length > 0) {
            this.boundingBox = {
                x: [this.vertices[0].position.x, this.vertices[0].position.x],
                y: [this.vertices[0].position.y, this.vertices[0].position.y],
                z: [this.vertices[0].position.z, this.vertices[0].position.z]
            };
            for (var c = 1, d = this.vertices.length; c < d; c++) {
                a = this.vertices[c];
                if (a.position.x < this.boundingBox.x[0])
                    this.boundingBox.x[0] = a.position.x;
                else if (a.position.x > this.boundingBox.x[1])
                    this.boundingBox.x[1] = a.position.x;
                if (a.position.y < this.boundingBox.y[0])
                    this.boundingBox.y[0] = a.position.y;
                else if (a.position.y > this.boundingBox.y[1])
                    this.boundingBox.y[1] = a.position.y;
                if (a.position.z < this.boundingBox.z[0])
                    this.boundingBox.z[0] = a.position.z;
                else if (a.position.z > this.boundingBox.z[1])
                    this.boundingBox.z[1] = a.position.z
            }
        }
    },
    computeBoundingSphere: function() {
        for (var a = this.boundingSphere === null ? 0 : this.boundingSphere.radius, c = 0, d = this.vertices.length; c < d; c++)
            a = Math.max(a, this.vertices[c].position.length());
        this.boundingSphere = {
            radius: a
        }
    },
    sortFacesByMaterial: function() {
        function a(y) {
            var z = [];
            c = 0;
            for (d = y.length; c < d; c++)
                y[c] == undefined ? z.push("undefined") : z.push(y[c].toString());
            return z.join("_")
        }
        var c, d, f, g, h, o, b, i, k = {};
        f = 0;
        for (g = this.faces.length; f < g; f++) {
            h = this.faces[f];
            o = h.materials;
            b = a(o);
            if (k[b] == undefined)
                k[b] = {
                    hash: b,
                    counter: 0
                };
            i = k[b].hash + "_" + k[b].counter;
            if (this.geometryChunks[i] == undefined)
                this.geometryChunks[i] = {
                    faces: [],
                    materials: o,
                    vertices: 0
                };
            h = h instanceof THREE.Face3 ? 3 : 4;
            if (this.geometryChunks[i].vertices + h > 65535) {
                k[b].counter += 1;
                i = k[b].hash + "_" + k[b].counter;
                if (this.geometryChunks[i] == undefined)
                    this.geometryChunks[i] = {
                        faces: [],
                        materials: o,
                        vertices: 0
                    }
            }
            this.geometryChunks[i].faces.push(f);
            this.geometryChunks[i].vertices += h
        }
    },
    toString: function() {
        return "THREE.Geometry ( vertices: " + this.vertices + ", faces: " + this.faces + ", uvs: " + this.uvs + " )"
    }
};
THREE.Camera = function(a, c, d, f) {
    this.fov = a;
    this.aspect = c;
    this.near = d;
    this.far = f;
    this.position = new THREE.Vector3;
    this.target = {
        position: new THREE.Vector3
    };
    this.autoUpdateMatrix = true;
    this.projectionMatrix = null;
    this.matrix = new THREE.Matrix4;
    this.up = new THREE.Vector3(0,1,0);
    this.tmpVec = new THREE.Vector3;
    this.translateX = function(g) {
        this.tmpVec.sub(this.target.position, this.position).normalize().multiplyScalar(g);
        this.tmpVec.crossSelf(this.up);
        this.position.addSelf(this.tmpVec);
        this.target.position.addSelf(this.tmpVec)
    }
    ;
    this.translateZ = function(g) {
        this.tmpVec.sub(this.target.position, this.position).normalize().multiplyScalar(g);
        this.position.subSelf(this.tmpVec);
        this.target.position.subSelf(this.tmpVec)
    }
    ;
    this.updateMatrix = function() {
        this.matrix.lookAt(this.position, this.target.position, this.up)
    }
    ;
    this.updateProjectionMatrix = function() {
        this.projectionMatrix = THREE.Matrix4.makePerspective(this.fov, this.aspect, this.near, this.far)
    }
    ;
    this.updateProjectionMatrix()
}
;
THREE.Camera.prototype = {
    toString: function() {
        return "THREE.Camera ( " + this.position + ", " + this.target.position + " )"
    }
};
THREE.Light = function(a) {
    this.color = new THREE.Color(a)
}
;
THREE.AmbientLight = function(a) {
    THREE.Light.call(this, a)
}
;
THREE.AmbientLight.prototype = new THREE.Light;
THREE.AmbientLight.prototype.constructor = THREE.AmbientLight;
THREE.DirectionalLight = function(a, c) {
    THREE.Light.call(this, a);
    this.position = new THREE.Vector3(0,1,0);
    this.intensity = c || 1
}
;
THREE.DirectionalLight.prototype = new THREE.Light;
THREE.DirectionalLight.prototype.constructor = THREE.DirectionalLight;
THREE.PointLight = function(a, c) {
    THREE.Light.call(this, a);
    this.position = new THREE.Vector3;
    this.intensity = c || 1
}
;
THREE.DirectionalLight.prototype = new THREE.Light;
THREE.DirectionalLight.prototype.constructor = THREE.PointLight;
THREE.Object3D = function() {
    this.id = THREE.Object3DCounter.value++;
    this.position = new THREE.Vector3;
    this.rotation = new THREE.Vector3;
    this.scale = new THREE.Vector3(1,1,1);
    this.matrix = new THREE.Matrix4;
    this.rotationMatrix = new THREE.Matrix4;
    this.tmpMatrix = new THREE.Matrix4;
    this.screen = new THREE.Vector3;
    this.visible = this.autoUpdateMatrix = true
}
;
THREE.Object3D.prototype = {
    updateMatrix: function() {
        var a = this.position
          , c = this.rotation
          , d = this.scale
          , f = this.tmpMatrix;
        this.matrix.setTranslation(a.x, a.y, a.z);
        this.rotationMatrix.setRotX(c.x);
        if (c.y != 0) {
            f.setRotY(c.y);
            this.rotationMatrix.multiplySelf(f)
        }
        if (c.z != 0) {
            f.setRotZ(c.z);
            this.rotationMatrix.multiplySelf(f)
        }
        this.matrix.multiplySelf(this.rotationMatrix);
        if (d.x != 0 || d.y != 0 || d.z != 0) {
            f.setScale(d.x, d.y, d.z);
            this.matrix.multiplySelf(f)
        }
    }
};
THREE.Object3DCounter = {
    value: 0
};
THREE.Particle = function(a) {
    THREE.Object3D.call(this);
    this.materials = a instanceof Array ? a : [a];
    this.autoUpdateMatrix = false
}
;
THREE.Particle.prototype = new THREE.Object3D;
THREE.Particle.prototype.constructor = THREE.Particle;
THREE.ParticleSystem = function(a, c) {
    THREE.Object3D.call(this);
    this.geometry = a;
    this.materials = c instanceof Array ? c : [c];
    this.autoUpdateMatrix = false
}
;
THREE.ParticleSystem.prototype = new THREE.Object3D;
THREE.ParticleSystem.prototype.constructor = THREE.ParticleSystem;
THREE.Line = function(a, c, d) {
    THREE.Object3D.call(this);
    this.geometry = a;
    this.materials = c instanceof Array ? c : [c];
    this.type = d != undefined ? d : THREE.LineStrip
}
;
THREE.LineStrip = 0;
THREE.LinePieces = 1;
THREE.Line.prototype = new THREE.Object3D;
THREE.Line.prototype.constructor = THREE.Line;
THREE.Mesh = function(a, c) {
    THREE.Object3D.call(this);
    this.geometry = a;
    this.materials = c instanceof Array ? c : [c];
    this.overdraw = this.doubleSided = this.flipSided = false;
    this.geometry.boundingSphere || this.geometry.computeBoundingSphere()
}
;
THREE.Mesh.prototype = new THREE.Object3D;
THREE.Mesh.prototype.constructor = THREE.Mesh;
THREE.FlatShading = 0;
THREE.SmoothShading = 1;
THREE.NormalBlending = 0;
THREE.AdditiveBlending = 1;
THREE.SubtractiveBlending = 2;
THREE.LineBasicMaterial = function(a) {
    this.color = new THREE.Color(16777215);
    this.opacity = 1;
    this.blending = THREE.NormalBlending;
    this.linewidth = 1;
    this.linejoin = this.linecap = "round";
    if (a) {
        a.color !== undefined && this.color.setHex(a.color);
        if (a.opacity !== undefined)
            this.opacity = a.opacity;
        if (a.blending !== undefined)
            this.blending = a.blending;
        if (a.linewidth !== undefined)
            this.linewidth = a.linewidth;
        if (a.linecap !== undefined)
            this.linecap = a.linecap;
        if (a.linejoin !== undefined)
            this.linejoin = a.linejoin
    }
}
;
THREE.LineBasicMaterial.prototype = {
    toString: function() {
        return "THREE.LineBasicMaterial (<br/>color: " + this.color + "<br/>opacity: " + this.opacity + "<br/>blending: " + this.blending + "<br/>linewidth: " + this.linewidth + "<br/>linecap: " + this.linecap + "<br/>linejoin: " + this.linejoin + "<br/>)"
    }
};
THREE.MeshBasicMaterial = function(a) {
    this.id = THREE.MeshBasicMaterialCounter.value++;
    this.color = new THREE.Color(16777215);
    this.env_map = this.map = null;
    this.combine = THREE.MultiplyOperation;
    this.reflectivity = 1;
    this.refraction_ratio = 0.98;
    this.fog = true;
    this.opacity = 1;
    this.shading = THREE.SmoothShading;
    this.blending = THREE.NormalBlending;
    this.wireframe = false;
    this.wireframe_linewidth = 1;
    this.wireframe_linejoin = this.wireframe_linecap = "round";
    if (a) {
        a.color !== undefined && this.color.setHex(a.color);
        if (a.map !== undefined)
            this.map = a.map;
        if (a.env_map !== undefined)
            this.env_map = a.env_map;
        if (a.combine !== undefined)
            this.combine = a.combine;
        if (a.reflectivity !== undefined)
            this.reflectivity = a.reflectivity;
        if (a.refraction_ratio !== undefined)
            this.refraction_ratio = a.refraction_ratio;
        if (a.fog !== undefined)
            this.fog = a.fog;
        if (a.opacity !== undefined)
            this.opacity = a.opacity;
        if (a.shading !== undefined)
            this.shading = a.shading;
        if (a.blending !== undefined)
            this.blending = a.blending;
        if (a.wireframe !== undefined)
            this.wireframe = a.wireframe;
        if (a.wireframe_linewidth !== undefined)
            this.wireframe_linewidth = a.wireframe_linewidth;
        if (a.wireframe_linecap !== undefined)
            this.wireframe_linecap = a.wireframe_linecap;
        if (a.wireframe_linejoin !== undefined)
            this.wireframe_linejoin = a.wireframe_linejoin
    }
}
;
THREE.MeshBasicMaterial.prototype = {
    toString: function() {
        return "THREE.MeshBasicMaterial (<br/>id: " + this.id + "<br/>color: " + this.color + "<br/>map: " + this.map + "<br/>env_map: " + this.env_map + "<br/>combine: " + this.combine + "<br/>reflectivity: " + this.reflectivity + "<br/>refraction_ratio: " + this.refraction_ratio + "<br/>opacity: " + this.opacity + "<br/>blending: " + this.blending + "<br/>wireframe: " + this.wireframe + "<br/>wireframe_linewidth: " + this.wireframe_linewidth + "<br/>wireframe_linecap: " + this.wireframe_linecap + "<br/>wireframe_linejoin: " + this.wireframe_linejoin + "<br/>)"
    }
};
THREE.MeshBasicMaterialCounter = {
    value: 0
};
THREE.MeshLambertMaterial = function(a) {
    this.id = THREE.MeshLambertMaterialCounter.value++;
    this.color = new THREE.Color(16777215);
    this.env_map = this.map = null;
    this.combine = THREE.MultiplyOperation;
    this.reflectivity = 1;
    this.refraction_ratio = 0.98;
    this.fog = true;
    this.opacity = 1;
    this.shading = THREE.SmoothShading;
    this.blending = THREE.NormalBlending;
    this.wireframe = false;
    this.wireframe_linewidth = 1;
    this.wireframe_linejoin = this.wireframe_linecap = "round";
    if (a) {
        a.color !== undefined && this.color.setHex(a.color);
        if (a.map !== undefined)
            this.map = a.map;
        if (a.env_map !== undefined)
            this.env_map = a.env_map;
        if (a.combine !== undefined)
            this.combine = a.combine;
        if (a.reflectivity !== undefined)
            this.reflectivity = a.reflectivity;
        if (a.refraction_ratio !== undefined)
            this.refraction_ratio = a.refraction_ratio;
        if (a.fog !== undefined)
            this.fog = a.fog;
        if (a.opacity !== undefined)
            this.opacity = a.opacity;
        if (a.shading !== undefined)
            this.shading = a.shading;
        if (a.blending !== undefined)
            this.blending = a.blending;
        if (a.wireframe !== undefined)
            this.wireframe = a.wireframe;
        if (a.wireframe_linewidth !== undefined)
            this.wireframe_linewidth = a.wireframe_linewidth;
        if (a.wireframe_linecap !== undefined)
            this.wireframe_linecap = a.wireframe_linecap;
        if (a.wireframe_linejoin !== undefined)
            this.wireframe_linejoin = a.wireframe_linejoin
    }
}
;
THREE.MeshLambertMaterial.prototype = {
    toString: function() {
        return "THREE.MeshLambertMaterial (<br/>id: " + this.id + "<br/>color: " + this.color + "<br/>map: " + this.map + "<br/>env_map: " + this.env_map + "<br/>combine: " + this.combine + "<br/>reflectivity: " + this.reflectivity + "<br/>refraction_ratio: " + this.refraction_ratio + "<br/>opacity: " + this.opacity + "<br/>shading: " + this.shading + "<br/>blending: " + this.blending + "<br/>wireframe: " + this.wireframe + "<br/>wireframe_linewidth: " + this.wireframe_linewidth + "<br/>wireframe_linecap: " + this.wireframe_linecap + "<br/>wireframe_linejoin: " + this.wireframe_linejoin + "<br/> )"
    }
};
THREE.MeshLambertMaterialCounter = {
    value: 0
};
THREE.MeshPhongMaterial = function(a) {
    this.id = THREE.MeshPhongMaterialCounter.value++;
    this.color = new THREE.Color(16777215);
    this.ambient = new THREE.Color(328965);
    this.specular = new THREE.Color(1118481);
    this.shininess = 30;
    this.env_map = this.specular_map = this.map = null;
    this.combine = THREE.MultiplyOperation;
    this.reflectivity = 1;
    this.refraction_ratio = 0.98;
    this.fog = true;
    this.opacity = 1;
    this.shading = THREE.SmoothShading;
    this.blending = THREE.NormalBlending;
    this.wireframe = false;
    this.wireframe_linewidth = 1;
    this.wireframe_linejoin = this.wireframe_linecap = "round";
    if (a) {
        if (a.color !== undefined)
            this.color = new THREE.Color(a.color);
        if (a.ambient !== undefined)
            this.ambient = new THREE.Color(a.ambient);
        if (a.specular !== undefined)
            this.specular = new THREE.Color(a.specular);
        if (a.shininess !== undefined)
            this.shininess = a.shininess;
        if (a.map !== undefined)
            this.map = a.map;
        if (a.specular_map !== undefined)
            this.specular_map = a.specular_map;
        if (a.env_map !== undefined)
            this.env_map = a.env_map;
        if (a.combine !== undefined)
            this.combine = a.combine;
        if (a.reflectivity !== undefined)
            this.reflectivity = a.reflectivity;
        if (a.refraction_ratio !== undefined)
            this.refraction_ratio = a.refraction_ratio;
        if (a.fog !== undefined)
            this.fog = a.fog;
        if (a.opacity !== undefined)
            this.opacity = a.opacity;
        if (a.shading !== undefined)
            this.shading = a.shading;
        if (a.blending !== undefined)
            this.blending = a.blending;
        if (a.wireframe !== undefined)
            this.wireframe = a.wireframe;
        if (a.wireframe_linewidth !== undefined)
            this.wireframe_linewidth = a.wireframe_linewidth;
        if (a.wireframe_linecap !== undefined)
            this.wireframe_linecap = a.wireframe_linecap;
        if (a.wireframe_linejoin !== undefined)
            this.wireframe_linejoin = a.wireframe_linejoin
    }
}
;
THREE.MeshPhongMaterial.prototype = {
    toString: function() {
        return "THREE.MeshPhongMaterial (<br/>id: " + this.id + "<br/>color: " + this.color + "<br/>ambient: " + this.ambient + "<br/>specular: " + this.specular + "<br/>shininess: " + this.shininess + "<br/>map: " + this.map + "<br/>specular_map: " + this.specular_map + "<br/>env_map: " + this.env_map + "<br/>combine: " + this.combine + "<br/>reflectivity: " + this.reflectivity + "<br/>refraction_ratio: " + this.refraction_ratio + "<br/>opacity: " + this.opacity + "<br/>shading: " + this.shading + "<br/>wireframe: " + this.wireframe + "<br/>wireframe_linewidth: " + this.wireframe_linewidth + "<br/>wireframe_linecap: " + this.wireframe_linecap + "<br/>wireframe_linejoin: " + this.wireframe_linejoin + "<br/>)"
    }
};
THREE.MeshPhongMaterialCounter = {
    value: 0
};
THREE.MeshDepthMaterial = function(a) {
    this.opacity = 1;
    this.shading = THREE.SmoothShading;
    this.blending = THREE.NormalBlending;
    this.wireframe = false;
    this.wireframe_linewidth = 1;
    this.wireframe_linejoin = this.wireframe_linecap = "round";
    if (a) {
        if (a.opacity !== undefined)
            this.opacity = a.opacity;
        if (a.blending !== undefined)
            this.blending = a.blending
    }
}
;
THREE.MeshDepthMaterial.prototype = {
    toString: function() {
        return "THREE.MeshDepthMaterial"
    }
};
THREE.MeshNormalMaterial = function(a) {
    this.opacity = 1;
    this.shading = THREE.FlatShading;
    this.blending = THREE.NormalBlending;
    if (a) {
        if (a.opacity !== undefined)
            this.opacity = a.opacity;
        if (a.shading !== undefined)
            this.shading = a.shading;
        if (a.blending !== undefined)
            this.blending = a.blending
    }
}
;
THREE.MeshNormalMaterial.prototype = {
    toString: function() {
        return "THREE.MeshNormalMaterial"
    }
};
THREE.MeshFaceMaterial = function() {}
;
THREE.MeshFaceMaterial.prototype = {
    toString: function() {
        return "THREE.MeshFaceMaterial"
    }
};
THREE.MeshShaderMaterial = function(a) {
    this.id = THREE.MeshShaderMaterialCounter.value++;
    this.vertex_shader = this.fragment_shader = "void main() {}";
    this.uniforms = {};
    this.opacity = 1;
    this.shading = THREE.SmoothShading;
    this.blending = THREE.NormalBlending;
    this.wireframe = false;
    this.wireframe_linewidth = 1;
    this.wireframe_linejoin = this.wireframe_linecap = "round";
    if (a) {
        if (a.fragment_shader !== undefined)
            this.fragment_shader = a.fragment_shader;
        if (a.vertex_shader !== undefined)
            this.vertex_shader = a.vertex_shader;
        if (a.uniforms !== undefined)
            this.uniforms = a.uniforms;
        if (a.shading !== undefined)
            this.shading = a.shading;
        if (a.blending !== undefined)
            this.blending = a.blending;
        if (a.wireframe !== undefined)
            this.wireframe = a.wireframe;
        if (a.wireframe_linewidth !== undefined)
            this.wireframe_linewidth = a.wireframe_linewidth;
        if (a.wireframe_linecap !== undefined)
            this.wireframe_linecap = a.wireframe_linecap;
        if (a.wireframe_linejoin !== undefined)
            this.wireframe_linejoin = a.wireframe_linejoin
    }
}
;
THREE.MeshShaderMaterial.prototype = {
    toString: function() {
        return "THREE.MeshShaderMaterial (<br/>id: " + this.id + "<br/>blending: " + this.blending + "<br/>wireframe: " + this.wireframe + "<br/>wireframe_linewidth: " + this.wireframe_linewidth + "<br/>wireframe_linecap: " + this.wireframe_linecap + "<br/>wireframe_linejoin: " + this.wireframe_linejoin + "<br/>)"
    }
};
THREE.MeshShaderMaterialCounter = {
    value: 0
};
THREE.ParticleBasicMaterial = function(a) {
    this.color = new THREE.Color(16777215);
    this.map = null;
    this.opacity = 1;
    this.blending = THREE.NormalBlending;
    this.offset = new THREE.Vector2;
    if (a) {
        a.color !== undefined && this.color.setHex(a.color);
        if (a.map !== undefined)
            this.map = a.map;
        if (a.opacity !== undefined)
            this.opacity = a.opacity;
        if (a.blending !== undefined)
            this.blending = a.blending
    }
}
;
THREE.ParticleBasicMaterial.prototype = {
    toString: function() {
        return "THREE.ParticleBasicMaterial (<br/>color: " + this.color + "<br/>map: " + this.map + "<br/>opacity: " + this.opacity + "<br/>blending: " + this.blending + "<br/>)"
    }
};
THREE.ParticleCircleMaterial = function(a) {
    this.color = new THREE.Color(16777215);
    this.opacity = 1;
    this.blending = THREE.NormalBlending;
    if (a) {
        a.color !== undefined && this.color.setHex(a.color);
        if (a.opacity !== undefined)
            this.opacity = a.opacity;
        if (a.blending !== undefined)
            this.blending = a.blending
    }
}
;
THREE.ParticleCircleMaterial.prototype = {
    toString: function() {
        return "THREE.ParticleCircleMaterial (<br/>color: " + this.color + "<br/>opacity: " + this.opacity + "<br/>blending: " + this.blending + "<br/>)"
    }
};
THREE.ParticleDOMMaterial = function(a) {
    this.domElement = a
}
;
THREE.ParticleDOMMaterial.prototype = {
    toString: function() {
        return "THREE.ParticleDOMMaterial ( domElement: " + this.domElement + " )"
    }
};
THREE.Texture = function(a, c, d, f, g, h) {
    this.image = a;
    this.mapping = c !== undefined ? c : new THREE.UVMapping;
    this.wrap_s = d !== undefined ? d : THREE.ClampToEdgeWrapping;
    this.wrap_t = f !== undefined ? f : THREE.ClampToEdgeWrapping;
    this.mag_filter = g !== undefined ? g : THREE.LinearFilter;
    this.min_filter = h !== undefined ? h : THREE.LinearMipMapLinearFilter
}
;
THREE.Texture.prototype = {
    clone: function() {
        return new THREE.Texture(this.image,this.mapping,this.wrap_s,this.wrap_t,this.mag_filter,this.min_filter)
    },
    toString: function() {
        return "THREE.Texture (<br/>image: " + this.image + "<br/>wrap_s: " + this.wrap_s + "<br/>wrap_t: " + this.wrap_t + "<br/>mag_filter: " + this.mag_filter + "<br/>min_filter: " + this.min_filter + "<br/>)"
    }
};
THREE.MultiplyOperation = 0;
THREE.MixOperation = 1;
THREE.RepeatWrapping = 0;
THREE.ClampToEdgeWrapping = 1;
THREE.MirroredRepeatWrapping = 2;
THREE.NearestFilter = 3;
THREE.NearestMipMapNearestFilter = 4;
THREE.NearestMipMapLinearFilter = 5;
THREE.LinearFilter = 6;
THREE.LinearMipMapNearestFilter = 7;
THREE.LinearMipMapLinearFilter = 8;
THREE.ByteType = 9;
THREE.UnsignedByteType = 10;
THREE.ShortType = 11;
THREE.UnsignedShortType = 12;
THREE.IntType = 13;
THREE.UnsignedIntType = 14;
THREE.FloatType = 15;
THREE.AlphaFormat = 16;
THREE.RGBFormat = 17;
THREE.RGBAFormat = 18;
THREE.LuminanceFormat = 19;
THREE.LuminanceAlphaFormat = 20;
THREE.RenderTarget = function(a, c, d) {
    this.width = a;
    this.height = c;
    d = d || {};
    this.wrap_s = d.wrap_s !== undefined ? d.wrap_s : THREE.ClampToEdgeWrapping;
    this.wrap_t = d.wrap_t !== undefined ? d.wrap_t : THREE.ClampToEdgeWrapping;
    this.mag_filter = d.mag_filter !== undefined ? d.mag_filter : THREE.LinearFilter;
    this.min_filter = d.min_filter !== undefined ? d.min_filter : THREE.LinearMipMapLinearFilter;
    this.format = d.format !== undefined ? d.format : THREE.RGBFormat;
    this.type = d.type !== undefined ? d.type : THREE.UnsignedByteType
}
;
var Uniforms = {
    clone: function(a) {
        var c, d, f, g = {};
        for (c in a) {
            g[c] = {};
            for (d in a[c]) {
                f = a[c][d];
                g[c][d] = f instanceof THREE.Color || f instanceof THREE.Vector3 || f instanceof THREE.Texture ? f.clone() : f
            }
        }
        return g
    },
    merge: function(a) {
        var c, d, f, g = {};
        for (c = 0; c < a.length; c++) {
            f = this.clone(a[c]);
            for (d in f)
                g[d] = f[d]
        }
        return g
    }
};
THREE.CubeReflectionMapping = function() {}
;
THREE.CubeRefractionMapping = function() {}
;
THREE.LatitudeReflectionMapping = function() {}
;
THREE.LatitudeRefractionMapping = function() {}
;
THREE.SphericalReflectionMapping = function() {}
;
THREE.SphericalRefractionMapping = function() {}
;
THREE.UVMapping = function() {}
;
THREE.Scene = function() {
    this.objects = [];
    this.lights = [];
    this.fog = null;
    this.addObject = function(a) {
        this.objects.indexOf(a) === -1 && this.objects.push(a)
    }
    ;
    this.removeObject = function(a) {
        a = this.objects.indexOf(a);
        a !== -1 && this.objects.splice(a, 1)
    }
    ;
    this.addLight = function(a) {
        this.lights.indexOf(a) === -1 && this.lights.push(a)
    }
    ;
    this.removeLight = function(a) {
        a = this.lights.indexOf(a);
        a !== -1 && this.lights.splice(a, 1)
    }
    ;
    this.toString = function() {
        return "THREE.Scene ( " + this.objects + " )"
    }
}
;
THREE.Fog = function(a, c, d) {
    this.color = new THREE.Color(a);
    this.near = c || 1;
    this.far = d || 1E3
}
;
THREE.FogExp2 = function(a, c) {
    this.color = new THREE.Color(a);
    this.density = c || 2.5E-4
}
;
THREE.Projector = function() {
    function a(l, r) {
        return r.z - l.z
    }
    function c(l, r) {
        var C = 0
          , m = 1
          , t = l.z + l.w
          , v = r.z + r.w
          , s = -l.z + l.w
          , n = -r.z + r.w;
        if (t >= 0 && v >= 0 && s >= 0 && n >= 0)
            return true;
        else if (t < 0 && v < 0 || s < 0 && n < 0)
            return false;
        else {
            if (t < 0)
                C = Math.max(C, t / (t - v));
            else if (v < 0)
                m = Math.min(m, t / (t - v));
            if (s < 0)
                C = Math.max(C, s / (s - n));
            else if (n < 0)
                m = Math.min(m, s / (s - n));
            if (m < C)
                return false;
            else {
                l.lerpSelf(r, C);
                r.lerpSelf(l, 1 - m);
                return true
            }
        }
    }
    var d, f, g = [], h, o, b, i = [], k, y, z = [], u, x, H = [], J = new THREE.Vector4, K = new THREE.Vector4, p = new THREE.Matrix4, U = new THREE.Matrix4, F = [], e = new THREE.Vector4, j = new THREE.Vector4, q;
    this.projectObjects = function(l, r, C) {
        var m = [], t, v;
        f = 0;
        p.multiply(r.projectionMatrix, r.matrix);
        F[0] = new THREE.Vector4(p.n41 - p.n11,p.n42 - p.n12,p.n43 - p.n13,p.n44 - p.n14);
        F[1] = new THREE.Vector4(p.n41 + p.n11,p.n42 + p.n12,p.n43 + p.n13,p.n44 + p.n14);
        F[2] = new THREE.Vector4(p.n41 + p.n21,p.n42 + p.n22,p.n43 + p.n23,p.n44 + p.n24);
        F[3] = new THREE.Vector4(p.n41 - p.n21,p.n42 - p.n22,p.n43 - p.n23,p.n44 - p.n24);
        F[4] = new THREE.Vector4(p.n41 - p.n31,p.n42 - p.n32,p.n43 - p.n33,p.n44 - p.n34);
        F[5] = new THREE.Vector4(p.n41 + p.n31,p.n42 + p.n32,p.n43 + p.n33,p.n44 + p.n34);
        r = 0;
        for (t = F.length; r < t; r++) {
            v = F[r];
            v.divideScalar(Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z))
        }
        t = l.objects;
        l = 0;
        for (r = t.length; l < r; l++) {
            v = t[l];
            var s;
            if (!(s = !v.visible)) {
                if (s = v instanceof THREE.Mesh) {
                    a: {
                        s = void 0;
                        for (var n = v.position, E = -v.geometry.boundingSphere.radius * Math.max(v.scale.x, Math.max(v.scale.y, v.scale.z)), A = 0; A < 6; A++) {
                            s = F[A].x * n.x + F[A].y * n.y + F[A].z * n.z + F[A].w;
                            if (s <= E) {
                                s = false;
                                break a
                            }
                        }
                        s = true
                    }
                    s = !s
                }
                s = s
            }
            if (!s) {
                d = g[f] = g[f] || new THREE.RenderableObject;
                J.copy(v.position);
                p.multiplyVector3(J);
                d.object = v;
                d.z = J.z;
                m.push(d);
                f++
            }
        }
        C && m.sort(a);
        return m
    }
    ;
    this.projectScene = function(l, r, C) {
        var m = [], t = r.near, v = r.far, s, n, E, A, O, N, G, W, P, I, L, V, S, w, M, Q;
        b = y = x = 0;
        r.autoUpdateMatrix && r.updateMatrix();
        p.multiply(r.projectionMatrix, r.matrix);
        N = this.projectObjects(l, r, true);
        l = 0;
        for (s = N.length; l < s; l++) {
            G = N[l].object;
            if (G.visible) {
                G.autoUpdateMatrix && G.updateMatrix();
                W = G.matrix;
                P = G.rotationMatrix;
                I = G.materials;
                L = G.overdraw;
                if (G instanceof THREE.Mesh) {
                    V = G.geometry;
                    S = V.vertices;
                    n = 0;
                    for (E = S.length; n < E; n++) {
                        w = S[n];
                        w.positionWorld.copy(w.position);
                        W.multiplyVector3(w.positionWorld);
                        A = w.positionScreen;
                        A.copy(w.positionWorld);
                        p.multiplyVector4(A);
                        A.x /= A.w;
                        A.y /= A.w;
                        w.__visible = A.z > t && A.z < v
                    }
                    V = V.faces;
                    n = 0;
                    for (E = V.length; n < E; n++) {
                        w = V[n];
                        if (w instanceof THREE.Face3) {
                            A = S[w.a];
                            O = S[w.b];
                            M = S[w.c];
                            if (A.__visible && O.__visible && M.__visible)
                                if (G.doubleSided || G.flipSided != (M.positionScreen.x - A.positionScreen.x) * (O.positionScreen.y - A.positionScreen.y) - (M.positionScreen.y - A.positionScreen.y) * (O.positionScreen.x - A.positionScreen.x) < 0) {
                                    h = i[b] = i[b] || new THREE.RenderableFace3;
                                    h.v1.positionWorld.copy(A.positionWorld);
                                    h.v2.positionWorld.copy(O.positionWorld);
                                    h.v3.positionWorld.copy(M.positionWorld);
                                    h.v1.positionScreen.copy(A.positionScreen);
                                    h.v2.positionScreen.copy(O.positionScreen);
                                    h.v3.positionScreen.copy(M.positionScreen);
                                    h.normalWorld.copy(w.normal);
                                    P.multiplyVector3(h.normalWorld);
                                    h.centroidWorld.copy(w.centroid);
                                    W.multiplyVector3(h.centroidWorld);
                                    h.centroidScreen.copy(h.centroidWorld);
                                    p.multiplyVector3(h.centroidScreen);
                                    M = w.vertexNormals;
                                    q = h.vertexNormalsWorld;
                                    A = 0;
                                    for (O = M.length; A < O; A++) {
                                        Q = q[A] = q[A] || new THREE.Vector3;
                                        Q.copy(M[A]);
                                        P.multiplyVector3(Q)
                                    }
                                    h.z = h.centroidScreen.z;
                                    h.meshMaterials = I;
                                    h.faceMaterials = w.materials;
                                    h.overdraw = L;
                                    if (G.geometry.uvs[n]) {
                                        h.uvs[0] = G.geometry.uvs[n][0];
                                        h.uvs[1] = G.geometry.uvs[n][1];
                                        h.uvs[2] = G.geometry.uvs[n][2]
                                    }
                                    m.push(h);
                                    b++
                                }
                        } else if (w instanceof THREE.Face4) {
                            A = S[w.a];
                            O = S[w.b];
                            M = S[w.c];
                            Q = S[w.d];
                            if (A.__visible && O.__visible && M.__visible && Q.__visible)
                                if (G.doubleSided || G.flipSided != ((Q.positionScreen.x - A.positionScreen.x) * (O.positionScreen.y - A.positionScreen.y) - (Q.positionScreen.y - A.positionScreen.y) * (O.positionScreen.x - A.positionScreen.x) < 0 || (O.positionScreen.x - M.positionScreen.x) * (Q.positionScreen.y - M.positionScreen.y) - (O.positionScreen.y - M.positionScreen.y) * (Q.positionScreen.x - M.positionScreen.x) < 0)) {
                                    h = i[b] = i[b] || new THREE.RenderableFace3;
                                    h.v1.positionWorld.copy(A.positionWorld);
                                    h.v2.positionWorld.copy(O.positionWorld);
                                    h.v3.positionWorld.copy(Q.positionWorld);
                                    h.v1.positionScreen.copy(A.positionScreen);
                                    h.v2.positionScreen.copy(O.positionScreen);
                                    h.v3.positionScreen.copy(Q.positionScreen);
                                    h.normalWorld.copy(w.normal);
                                    P.multiplyVector3(h.normalWorld);
                                    h.centroidWorld.copy(w.centroid);
                                    W.multiplyVector3(h.centroidWorld);
                                    h.centroidScreen.copy(h.centroidWorld);
                                    p.multiplyVector3(h.centroidScreen);
                                    h.z = h.centroidScreen.z;
                                    h.meshMaterials = I;
                                    h.faceMaterials = w.materials;
                                    h.overdraw = L;
                                    if (G.geometry.uvs[n]) {
                                        h.uvs[0] = G.geometry.uvs[n][0];
                                        h.uvs[1] = G.geometry.uvs[n][1];
                                        h.uvs[2] = G.geometry.uvs[n][3]
                                    }
                                    m.push(h);
                                    b++;
                                    o = i[b] = i[b] || new THREE.RenderableFace3;
                                    o.v1.positionWorld.copy(O.positionWorld);
                                    o.v2.positionWorld.copy(M.positionWorld);
                                    o.v3.positionWorld.copy(Q.positionWorld);
                                    o.v1.positionScreen.copy(O.positionScreen);
                                    o.v2.positionScreen.copy(M.positionScreen);
                                    o.v3.positionScreen.copy(Q.positionScreen);
                                    o.normalWorld.copy(h.normalWorld);
                                    o.centroidWorld.copy(h.centroidWorld);
                                    o.centroidScreen.copy(h.centroidScreen);
                                    o.z = o.centroidScreen.z;
                                    o.meshMaterials = I;
                                    o.faceMaterials = w.materials;
                                    o.overdraw = L;
                                    if (G.geometry.uvs[n]) {
                                        o.uvs[0] = G.geometry.uvs[n][1];
                                        o.uvs[1] = G.geometry.uvs[n][2];
                                        o.uvs[2] = G.geometry.uvs[n][3]
                                    }
                                    m.push(o);
                                    b++
                                }
                        }
                    }
                } else if (G instanceof THREE.Line) {
                    U.multiply(p, W);
                    S = G.geometry.vertices;
                    w = S[0];
                    w.positionScreen.copy(w.position);
                    U.multiplyVector4(w.positionScreen);
                    n = 1;
                    for (E = S.length; n < E; n++) {
                        A = S[n];
                        A.positionScreen.copy(A.position);
                        U.multiplyVector4(A.positionScreen);
                        O = S[n - 1];
                        e.copy(A.positionScreen);
                        j.copy(O.positionScreen);
                        if (c(e, j)) {
                            e.multiplyScalar(1 / e.w);
                            j.multiplyScalar(1 / j.w);
                            k = z[y] = z[y] || new THREE.RenderableLine;
                            k.v1.positionScreen.copy(e);
                            k.v2.positionScreen.copy(j);
                            k.z = Math.max(e.z, j.z);
                            k.materials = G.materials;
                            m.push(k);
                            y++
                        }
                    }
                } else if (G instanceof THREE.Particle) {
                    K.set(G.position.x, G.position.y, G.position.z, 1);
                    p.multiplyVector4(K);
                    K.z /= K.w;
                    if (K.z > 0 && K.z < 1) {
                        u = H[x] = H[x] || new THREE.RenderableParticle;
                        u.x = K.x / K.w;
                        u.y = K.y / K.w;
                        u.z = K.z;
                        u.rotation = G.rotation.z;
                        u.scale.x = G.scale.x * Math.abs(u.x - (K.x + r.projectionMatrix.n11) / (K.w + r.projectionMatrix.n14));
                        u.scale.y = G.scale.y * Math.abs(u.y - (K.y + r.projectionMatrix.n22) / (K.w + r.projectionMatrix.n24));
                        u.materials = G.materials;
                        m.push(u);
                        x++
                    }
                }
            }
        }
        C && m.sort(a);
        return m
    }
    ;
    this.unprojectVector = function(l, r) {
        var C = new THREE.Matrix4;
        C.multiply(THREE.Matrix4.makeInvert(r.matrix), THREE.Matrix4.makeInvert(r.projectionMatrix));
        C.multiplyVector3(l);
        return l
    }
}
;
THREE.DOMRenderer = function() {
    THREE.Renderer.call(this);
    var a = null, c = new THREE.Projector, d, f, g, h;
    this.domElement = document.createElement("div");
    this.setSize = function(o, b) {
        d = o;
        f = b;
        g = d / 2;
        h = f / 2
    }
    ;
    this.render = function(o, b) {
        var i, k, y, z, u, x, H, J;
        a = c.projectScene(o, b);
        i = 0;
        for (k = a.length; i < k; i++) {
            u = a[i];
            if (u instanceof THREE.RenderableParticle) {
                H = u.x * g + g;
                J = u.y * h + h;
                y = 0;
                for (z = u.material.length; y < z; y++) {
                    x = u.material[y];
                    if (x instanceof THREE.ParticleDOMMaterial) {
                        x = x.domElement;
                        x.style.left = H + "px";
                        x.style.top = J + "px"
                    }
                }
            }
        }
    }
}
;
THREE.CanvasRenderer = function() {
    function a(da) {
        if (u != da)
            k.globalAlpha = u = da
    }
    function c(da) {
        if (x != da) {
            switch (da) {
            case THREE.NormalBlending:
                k.globalCompositeOperation = "source-over";
                break;
            case THREE.AdditiveBlending:
                k.globalCompositeOperation = "lighter";
                break;
            case THREE.SubtractiveBlending:
                k.globalCompositeOperation = "darker"
            }
            x = da
        }
    }
    var d = null, f = new THREE.Projector, g = document.createElement("canvas"), h, o, b, i, k = g.getContext("2d"), y = null, z = null, u = 1, x = 0, H = null, J = null, K = 1, p, U, F, e, j, q, l, r, C, m = new THREE.Color, t = new THREE.Color, v = new THREE.Color, s = new THREE.Color, n = new THREE.Color, E, A, O, N, G, W, P, I, L, V = new THREE.Rectangle, S = new THREE.Rectangle, w = new THREE.Rectangle, M = false, Q = new THREE.Color, ea = new THREE.Color, ba = new THREE.Color, Z = new THREE.Color, ja = Math.PI * 2, Y = new THREE.Vector3, qa, ka, fa, ha, sa, ua, va = 16;
    qa = document.createElement("canvas");
    qa.width = qa.height = 2;
    ka = qa.getContext("2d");
    ka.fillStyle = "rgba(0,0,0,1)";
    ka.fillRect(0, 0, 2, 2);
    fa = ka.getImageData(0, 0, 2, 2);
    ha = fa.data;
    sa = document.createElement("canvas");
    sa.width = sa.height = va;
    ua = sa.getContext("2d");
    ua.translate(-va / 2, -va / 2);
    ua.scale(va, va);
    va--;
    this.domElement = g;
    this.sortElements = this.sortObjects = this.autoClear = true;
    this.setSize = function(da, ra) {
        h = da;
        o = ra;
        b = h / 2;
        i = o / 2;
        g.width = h;
        g.height = o;
        V.set(-b, -i, b, i);
        u = 1;
        x = 0;
        J = H = null;
        K = 1
    }
    ;
    this.setClearColor = function(da, ra) {
        y = da !== null ? new THREE.Color(da) : null;
        z = ra;
        S.set(-b, -i, b, i);
        k.setTransform(1, 0, 0, -1, b, i);
        this.clear()
    }
    ;
    this.clear = function() {
        if (!S.isEmpty()) {
            S.inflate(1);
            S.minSelf(V);
            if (y !== null) {
                c(THREE.NormalBlending);
                a(1);
                k.fillStyle = "rgba(" + Math.floor(y.r * 255) + "," + Math.floor(y.g * 255) + "," + Math.floor(y.b * 255) + "," + z + ")";
                k.fillRect(S.getX(), S.getY(), S.getWidth(), S.getHeight())
            } else
                k.clearRect(S.getX(), S.getY(), S.getWidth(), S.getHeight());
            S.empty()
        }
    }
    ;
    this.render = function(da, ra) {
        function Ma(B) {
            var X, T, D, R = B.lights;
            ea.setRGB(0, 0, 0);
            ba.setRGB(0, 0, 0);
            Z.setRGB(0, 0, 0);
            B = 0;
            for (X = R.length; B < X; B++) {
                T = R[B];
                D = T.color;
                if (T instanceof THREE.AmbientLight) {
                    ea.r += D.r;
                    ea.g += D.g;
                    ea.b += D.b
                } else if (T instanceof THREE.DirectionalLight) {
                    ba.r += D.r;
                    ba.g += D.g;
                    ba.b += D.b
                } else if (T instanceof THREE.PointLight) {
                    Z.r += D.r;
                    Z.g += D.g;
                    Z.b += D.b
                }
            }
        }
        function Aa(B, X, T, D) {
            var R, $, ca, ga, ia = B.lights;
            B = 0;
            for (R = ia.length; B < R; B++) {
                $ = ia[B];
                ca = $.color;
                ga = $.intensity;
                if ($ instanceof THREE.DirectionalLight) {
                    $ = T.dot($.position) * ga;
                    if ($ > 0) {
                        D.r += ca.r * $;
                        D.g += ca.g * $;
                        D.b += ca.b * $
                    }
                } else if ($ instanceof THREE.PointLight) {
                    Y.sub($.position, X);
                    Y.normalize();
                    $ = T.dot(Y) * ga;
                    if ($ > 0) {
                        D.r += ca.r * $;
                        D.g += ca.g * $;
                        D.b += ca.b * $
                    }
                }
            }
        }
        function Na(B, X, T) {
            if (T.opacity != 0) {
                a(T.opacity);
                c(T.blending);
                var D, R, $, ca, ga, ia;
                if (T instanceof THREE.ParticleBasicMaterial) {
                    if (T.map) {
                        ca = T.map;
                        ga = ca.width >> 1;
                        ia = ca.height >> 1;
                        R = X.scale.x * b;
                        $ = X.scale.y * i;
                        T = R * ga;
                        D = $ * ia;
                        w.set(B.x - T, B.y - D, B.x + T, B.y + D);
                        if (V.instersects(w)) {
                            k.save();
                            k.translate(B.x, B.y);
                            k.rotate(-X.rotation);
                            k.scale(R, -$);
                            k.translate(-ga, -ia);
                            k.drawImage(ca, 0, 0);
                            k.restore()
                        }
                    }
                } else if (T instanceof THREE.ParticleCircleMaterial) {
                    if (M) {
                        Q.r = ea.r + ba.r + Z.r;
                        Q.g = ea.g + ba.g + Z.g;
                        Q.b = ea.b + ba.b + Z.b;
                        m.r = T.color.r * Q.r;
                        m.g = T.color.g * Q.g;
                        m.b = T.color.b * Q.b;
                        m.updateStyleString()
                    } else
                        m.__styleString = T.color.__styleString;
                    T = X.scale.x * b;
                    D = X.scale.y * i;
                    w.set(B.x - T, B.y - D, B.x + T, B.y + D);
                    if (V.instersects(w)) {
                        R = m.__styleString;
                        if (J != R)
                            k.fillStyle = J = R;
                        k.save();
                        k.translate(B.x, B.y);
                        k.rotate(-X.rotation);
                        k.scale(T, D);
                        k.beginPath();
                        k.arc(0, 0, 1, 0, ja, true);
                        k.closePath();
                        k.fill();
                        k.restore()
                    }
                }
            }
        }
        function Oa(B, X, T, D) {
            if (D.opacity != 0) {
                a(D.opacity);
                c(D.blending);
                k.beginPath();
                k.moveTo(B.positionScreen.x, B.positionScreen.y);
                k.lineTo(X.positionScreen.x, X.positionScreen.y);
                k.closePath();
                if (D instanceof THREE.LineBasicMaterial) {
                    m.__styleString = D.color.__styleString;
                    B = D.linewidth;
                    if (K != B)
                        k.lineWidth = K = B;
                    B = m.__styleString;
                    if (H != B)
                        k.strokeStyle = H = B;
                    k.stroke();
                    w.inflate(D.linewidth * 2)
                }
            }
        }
        function Ia(B, X, T, D, R, $) {
            if (R.opacity != 0) {
                a(R.opacity);
                c(R.blending);
                e = B.positionScreen.x;
                j = B.positionScreen.y;
                q = X.positionScreen.x;
                l = X.positionScreen.y;
                r = T.positionScreen.x;
                C = T.positionScreen.y;
                k.beginPath();
                k.moveTo(e, j);
                k.lineTo(q, l);
                k.lineTo(r, C);
                k.lineTo(e, j);
                k.closePath();
                if (R instanceof THREE.MeshBasicMaterial)
                    if (R.map)
                        R.map.image.loaded && R.map.mapping instanceof THREE.UVMapping && xa(e, j, q, l, r, C, R.map.image, D.uvs[0].u, D.uvs[0].v, D.uvs[1].u, D.uvs[1].v, D.uvs[2].u, D.uvs[2].v);
                    else if (R.env_map) {
                        if (R.env_map.image.loaded)
                            if (R.env_map.mapping instanceof THREE.SphericalReflectionMapping) {
                                B = ra.matrix;
                                Y.copy(D.vertexNormalsWorld[0]);
                                N = (Y.x * B.n11 + Y.y * B.n12 + Y.z * B.n13) * 0.5 + 0.5;
                                G = -(Y.x * B.n21 + Y.y * B.n22 + Y.z * B.n23) * 0.5 + 0.5;
                                Y.copy(D.vertexNormalsWorld[1]);
                                W = (Y.x * B.n11 + Y.y * B.n12 + Y.z * B.n13) * 0.5 + 0.5;
                                P = -(Y.x * B.n21 + Y.y * B.n22 + Y.z * B.n23) * 0.5 + 0.5;
                                Y.copy(D.vertexNormalsWorld[2]);
                                I = (Y.x * B.n11 + Y.y * B.n12 + Y.z * B.n13) * 0.5 + 0.5;
                                L = -(Y.x * B.n21 + Y.y * B.n22 + Y.z * B.n23) * 0.5 + 0.5;
                                xa(e, j, q, l, r, C, R.env_map.image, N, G, W, P, I, L)
                            }
                    } else
                        R.wireframe ? Ba(R.color.__styleString, R.wireframe_linewidth) : Ca(R.color.__styleString);
                else if (R instanceof THREE.MeshLambertMaterial) {
                    if (R.map && !R.wireframe) {
                        R.map.mapping instanceof THREE.UVMapping && xa(e, j, q, l, r, C, R.map.image, D.uvs[0].u, D.uvs[0].v, D.uvs[1].u, D.uvs[1].v, D.uvs[2].u, D.uvs[2].v);
                        c(THREE.SubtractiveBlending)
                    }
                    if (M)
                        if (!R.wireframe && R.shading == THREE.SmoothShading && D.vertexNormalsWorld.length == 3) {
                            t.r = v.r = s.r = ea.r;
                            t.g = v.g = s.g = ea.g;
                            t.b = v.b = s.b = ea.b;
                            Aa($, D.v1.positionWorld, D.vertexNormalsWorld[0], t);
                            Aa($, D.v2.positionWorld, D.vertexNormalsWorld[1], v);
                            Aa($, D.v3.positionWorld, D.vertexNormalsWorld[2], s);
                            n.r = (v.r + s.r) * 0.5;
                            n.g = (v.g + s.g) * 0.5;
                            n.b = (v.b + s.b) * 0.5;
                            O = Ja(t, v, s, n);
                            xa(e, j, q, l, r, C, O, 0, 0, 1, 0, 0, 1)
                        } else {
                            Q.r = ea.r;
                            Q.g = ea.g;
                            Q.b = ea.b;
                            Aa($, D.centroidWorld, D.normalWorld, Q);
                            m.r = R.color.r * Q.r;
                            m.g = R.color.g * Q.g;
                            m.b = R.color.b * Q.b;
                            m.updateStyleString();
                            R.wireframe ? Ba(m.__styleString, R.wireframe_linewidth) : Ca(m.__styleString)
                        }
                    else
                        R.wireframe ? Ba(R.color.__styleString, R.wireframe_linewidth) : Ca(R.color.__styleString)
                } else if (R instanceof THREE.MeshDepthMaterial) {
                    E = ra.near;
                    A = ra.far;
                    t.r = t.g = t.b = 1 - Ea(B.positionScreen.z, E, A);
                    v.r = v.g = v.b = 1 - Ea(X.positionScreen.z, E, A);
                    s.r = s.g = s.b = 1 - Ea(T.positionScreen.z, E, A);
                    n.r = (v.r + s.r) * 0.5;
                    n.g = (v.g + s.g) * 0.5;
                    n.b = (v.b + s.b) * 0.5;
                    O = Ja(t, v, s, n);
                    xa(e, j, q, l, r, C, O, 0, 0, 1, 0, 0, 1)
                } else if (R instanceof THREE.MeshNormalMaterial) {
                    m.r = Fa(D.normalWorld.x);
                    m.g = Fa(D.normalWorld.y);
                    m.b = Fa(D.normalWorld.z);
                    m.updateStyleString();
                    R.wireframe ? Ba(m.__styleString, R.wireframe_linewidth) : Ca(m.__styleString)
                }
            }
        }
        function Ba(B, X) {
            if (H != B)
                k.strokeStyle = H = B;
            if (K != X)
                k.lineWidth = K = X;
            k.stroke();
            w.inflate(X * 2)
        }
        function Ca(B) {
            if (J != B)
                k.fillStyle = J = B;
            k.fill()
        }
        function xa(B, X, T, D, R, $, ca, ga, ia, na, la, oa, ya) {
            var ta, pa;
            ta = ca.width - 1;
            pa = ca.height - 1;
            ga *= ta;
            ia *= pa;
            na *= ta;
            la *= pa;
            oa *= ta;
            ya *= pa;
            T -= B;
            D -= X;
            R -= B;
            $ -= X;
            na -= ga;
            la -= ia;
            oa -= ga;
            ya -= ia;
            pa = 1 / (na * ya - oa * la);
            ta = (ya * T - la * R) * pa;
            la = (ya * D - la * $) * pa;
            T = (na * R - oa * T) * pa;
            D = (na * $ - oa * D) * pa;
            B = B - ta * ga - T * ia;
            X = X - la * ga - D * ia;
            k.save();
            k.transform(ta, la, T, D, B, X);
            k.clip();
            k.drawImage(ca, 0, 0);
            k.restore()
        }
        function Ja(B, X, T, D) {
            var R = ~~(B.r * 255)
              , $ = ~~(B.g * 255);
            B = ~~(B.b * 255);
            var ca = ~~(X.r * 255)
              , ga = ~~(X.g * 255);
            X = ~~(X.b * 255);
            var ia = ~~(T.r * 255)
              , na = ~~(T.g * 255);
            T = ~~(T.b * 255);
            var la = ~~(D.r * 255)
              , oa = ~~(D.g * 255);
            D = ~~(D.b * 255);
            ha[0] = R < 0 ? 0 : R > 255 ? 255 : R;
            ha[1] = $ < 0 ? 0 : $ > 255 ? 255 : $;
            ha[2] = B < 0 ? 0 : B > 255 ? 255 : B;
            ha[4] = ca < 0 ? 0 : ca > 255 ? 255 : ca;
            ha[5] = ga < 0 ? 0 : ga > 255 ? 255 : ga;
            ha[6] = X < 0 ? 0 : X > 255 ? 255 : X;
            ha[8] = ia < 0 ? 0 : ia > 255 ? 255 : ia;
            ha[9] = na < 0 ? 0 : na > 255 ? 255 : na;
            ha[10] = T < 0 ? 0 : T > 255 ? 255 : T;
            ha[12] = la < 0 ? 0 : la > 255 ? 255 : la;
            ha[13] = oa < 0 ? 0 : oa > 255 ? 255 : oa;
            ha[14] = D < 0 ? 0 : D > 255 ? 255 : D;
            ka.putImageData(fa, 0, 0);
            ua.drawImage(qa, 0, 0);
            return sa
        }
        function Ea(B, X, T) {
            B = (B - X) / (T - X);
            return B * B * (3 - 2 * B)
        }
        function Fa(B) {
            B = (B + 1) * 0.5;
            return B < 0 ? 0 : B > 1 ? 1 : B
        }
        function Ga(B, X) {
            var T = X.x - B.x
              , D = X.y - B.y
              , R = 1 / Math.sqrt(T * T + D * D);
            T *= R;
            D *= R;
            X.x += T;
            X.y += D;
            B.x -= T;
            B.y -= D
        }
        var Da, Ka, aa, ma, wa, Ha, La, za;
        k.setTransform(1, 0, 0, -1, b, i);
        this.autoClear && this.clear();
        d = f.projectScene(da, ra, this.sortElements);
        (M = da.lights.length > 0) && Ma(da);
        Da = 0;
        for (Ka = d.length; Da < Ka; Da++) {
            aa = d[Da];
            w.empty();
            if (aa instanceof THREE.RenderableParticle) {
                p = aa;
                p.x *= b;
                p.y *= i;
                ma = 0;
                for (wa = aa.materials.length; ma < wa; ma++)
                    Na(p, aa, aa.materials[ma], da)
            } else if (aa instanceof THREE.RenderableLine) {
                p = aa.v1;
                U = aa.v2;
                p.positionScreen.x *= b;
                p.positionScreen.y *= i;
                U.positionScreen.x *= b;
                U.positionScreen.y *= i;
                w.addPoint(p.positionScreen.x, p.positionScreen.y);
                w.addPoint(U.positionScreen.x, U.positionScreen.y);
                if (V.instersects(w)) {
                    ma = 0;
                    for (wa = aa.materials.length; ma < wa; )
                        Oa(p, U, aa, aa.materials[ma++], da)
                }
            } else if (aa instanceof THREE.RenderableFace3) {
                p = aa.v1;
                U = aa.v2;
                F = aa.v3;
                p.positionScreen.x *= b;
                p.positionScreen.y *= i;
                U.positionScreen.x *= b;
                U.positionScreen.y *= i;
                F.positionScreen.x *= b;
                F.positionScreen.y *= i;
                if (aa.overdraw) {
                    Ga(p.positionScreen, U.positionScreen);
                    Ga(U.positionScreen, F.positionScreen);
                    Ga(F.positionScreen, p.positionScreen)
                }
                w.add3Points(p.positionScreen.x, p.positionScreen.y, U.positionScreen.x, U.positionScreen.y, F.positionScreen.x, F.positionScreen.y);
                if (V.instersects(w)) {
                    ma = 0;
                    for (wa = aa.meshMaterials.length; ma < wa; ) {
                        za = aa.meshMaterials[ma++];
                        if (za instanceof THREE.MeshFaceMaterial) {
                            Ha = 0;
                            for (La = aa.faceMaterials.length; Ha < La; )
                                (za = aa.faceMaterials[Ha++]) && Ia(p, U, F, aa, za, da)
                        } else
                            Ia(p, U, F, aa, za, da)
                    }
                }
            }
            S.addRectangle(w)
        }
        k.setTransform(1, 0, 0, 1, 0, 0)
    }
}
;
THREE.SVGRenderer = function() {
    function a(N, G, W) {
        var P, I, L, V;
        P = 0;
        for (I = N.lights.length; P < I; P++) {
            L = N.lights[P];
            if (L instanceof THREE.DirectionalLight) {
                V = G.normalWorld.dot(L.position) * L.intensity;
                if (V > 0) {
                    W.r += L.color.r * V;
                    W.g += L.color.g * V;
                    W.b += L.color.b * V
                }
            } else if (L instanceof THREE.PointLight) {
                C.sub(L.position, G.centroidWorld);
                C.normalize();
                V = G.normalWorld.dot(C) * L.intensity;
                if (V > 0) {
                    W.r += L.color.r * V;
                    W.g += L.color.g * V;
                    W.b += L.color.b * V
                }
            }
        }
    }
    function c(N, G, W, P, I, L) {
        s = f(n++);
        s.setAttribute("d", "M " + N.positionScreen.x + " " + N.positionScreen.y + " L " + G.positionScreen.x + " " + G.positionScreen.y + " L " + W.positionScreen.x + "," + W.positionScreen.y + "z");
        if (I instanceof THREE.MeshBasicMaterial)
            F.__styleString = I.color.__styleString;
        else if (I instanceof THREE.MeshLambertMaterial)
            if (U) {
                e.r = j.r;
                e.g = j.g;
                e.b = j.b;
                a(L, P, e);
                F.r = I.color.r * e.r;
                F.g = I.color.g * e.g;
                F.b = I.color.b * e.b;
                F.updateStyleString()
            } else
                F.__styleString = I.color.__styleString;
        else if (I instanceof THREE.MeshDepthMaterial) {
            r = 1 - I.__2near / (I.__farPlusNear - P.z * I.__farMinusNear);
            F.setRGB(r, r, r)
        } else
            I instanceof THREE.MeshNormalMaterial && F.setRGB(g(P.normalWorld.x), g(P.normalWorld.y), g(P.normalWorld.z));
        I.wireframe ? s.setAttribute("style", "fill: none; stroke: " + F.__styleString + "; stroke-width: " + I.wireframe_linewidth + "; stroke-opacity: " + I.opacity + "; stroke-linecap: " + I.wireframe_linecap + "; stroke-linejoin: " + I.wireframe_linejoin) : s.setAttribute("style", "fill: " + F.__styleString + "; fill-opacity: " + I.opacity);
        b.appendChild(s)
    }
    function d(N, G, W, P, I, L, V) {
        s = f(n++);
        s.setAttribute("d", "M " + N.positionScreen.x + " " + N.positionScreen.y + " L " + G.positionScreen.x + " " + G.positionScreen.y + " L " + W.positionScreen.x + "," + W.positionScreen.y + " L " + P.positionScreen.x + "," + P.positionScreen.y + "z");
        if (L instanceof THREE.MeshBasicMaterial)
            F.__styleString = L.color.__styleString;
        else if (L instanceof THREE.MeshLambertMaterial)
            if (U) {
                e.r = j.r;
                e.g = j.g;
                e.b = j.b;
                a(V, I, e);
                F.r = L.color.r * e.r;
                F.g = L.color.g * e.g;
                F.b = L.color.b * e.b;
                F.updateStyleString()
            } else
                F.__styleString = L.color.__styleString;
        else if (L instanceof THREE.MeshDepthMaterial) {
            r = 1 - L.__2near / (L.__farPlusNear - I.z * L.__farMinusNear);
            F.setRGB(r, r, r)
        } else
            L instanceof THREE.MeshNormalMaterial && F.setRGB(g(I.normalWorld.x), g(I.normalWorld.y), g(I.normalWorld.z));
        L.wireframe ? s.setAttribute("style", "fill: none; stroke: " + F.__styleString + "; stroke-width: " + L.wireframe_linewidth + "; stroke-opacity: " + L.opacity + "; stroke-linecap: " + L.wireframe_linecap + "; stroke-linejoin: " + L.wireframe_linejoin) : s.setAttribute("style", "fill: " + F.__styleString + "; fill-opacity: " + L.opacity);
        b.appendChild(s)
    }
    function f(N) {
        if (m[N] == null) {
            m[N] = document.createElementNS("http://www.w3.org/2000/svg", "path");
            O == 0 && m[N].setAttribute("shape-rendering", "crispEdges");
            return m[N]
        }
        return m[N]
    }
    function g(N) {
        return N < 0 ? Math.min((1 + N) * 0.5, 0.5) : 0.5 + Math.min(N * 0.5, 0.5)
    }
    var h = null, o = new THREE.Projector, b = document.createElementNS("http://www.w3.org/2000/svg", "svg"), i, k, y, z, u, x, H, J, K = new THREE.Rectangle, p = new THREE.Rectangle, U = false, F = new THREE.Color(16777215), e = new THREE.Color(16777215), j = new THREE.Color(0), q = new THREE.Color(0), l = new THREE.Color(0), r, C = new THREE.Vector3, m = [], t = [], v = [], s, n, E, A, O = 1;
    this.domElement = b;
    this.sortElements = this.sortObjects = this.autoClear = true;
    this.setQuality = function(N) {
        switch (N) {
        case "high":
            O = 1;
            break;
        case "low":
            O = 0
        }
    }
    ;
    this.setSize = function(N, G) {
        i = N;
        k = G;
        y = i / 2;
        z = k / 2;
        b.setAttribute("viewBox", -y + " " + -z + " " + i + " " + k);
        b.setAttribute("width", i);
        b.setAttribute("height", k);
        K.set(-y, -z, y, z)
    }
    ;
    this.clear = function() {
        for (; b.childNodes.length > 0; )
            b.removeChild(b.childNodes[0])
    }
    ;
    this.render = function(N, G) {
        var W, P, I, L, V, S, w, M;
        this.autoClear && this.clear();
        h = o.projectScene(N, G, this.sortElements);
        A = E = n = 0;
        if (U = N.lights.length > 0) {
            w = N.lights;
            j.setRGB(0, 0, 0);
            q.setRGB(0, 0, 0);
            l.setRGB(0, 0, 0);
            W = 0;
            for (P = w.length; W < P; W++) {
                I = w[W];
                L = I.color;
                if (I instanceof THREE.AmbientLight) {
                    j.r += L.r;
                    j.g += L.g;
                    j.b += L.b
                } else if (I instanceof THREE.DirectionalLight) {
                    q.r += L.r;
                    q.g += L.g;
                    q.b += L.b
                } else if (I instanceof THREE.PointLight) {
                    l.r += L.r;
                    l.g += L.g;
                    l.b += L.b
                }
            }
        }
        W = 0;
        for (P = h.length; W < P; W++) {
            w = h[W];
            p.empty();
            if (w instanceof THREE.RenderableParticle) {
                u = w;
                u.x *= y;
                u.y *= -z;
                I = 0;
                for (L = w.materials.length; I < L; I++)
                    if (M = w.materials[I]) {
                        V = u;
                        S = w;
                        M = M;
                        var Q = E++;
                        if (t[Q] == null) {
                            t[Q] = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                            O == 0 && t[Q].setAttribute("shape-rendering", "crispEdges")
                        }
                        s = t[Q];
                        s.setAttribute("cx", V.x);
                        s.setAttribute("cy", V.y);
                        s.setAttribute("r", S.scale.x * y);
                        if (M instanceof THREE.ParticleCircleMaterial) {
                            if (U) {
                                e.r = j.r + q.r + l.r;
                                e.g = j.g + q.g + l.g;
                                e.b = j.b + q.b + l.b;
                                F.r = M.color.r * e.r;
                                F.g = M.color.g * e.g;
                                F.b = M.color.b * e.b;
                                F.updateStyleString()
                            } else
                                F = M.color;
                            s.setAttribute("style", "fill: " + F.__styleString)
                        }
                        b.appendChild(s)
                    }
            } else if (w instanceof THREE.RenderableLine) {
                u = w.v1;
                x = w.v2;
                u.positionScreen.x *= y;
                u.positionScreen.y *= -z;
                x.positionScreen.x *= y;
                x.positionScreen.y *= -z;
                p.addPoint(u.positionScreen.x, u.positionScreen.y);
                p.addPoint(x.positionScreen.x, x.positionScreen.y);
                if (K.instersects(p)) {
                    I = 0;
                    for (L = w.materials.length; I < L; )
                        if (M = w.materials[I++]) {
                            V = u;
                            S = x;
                            M = M;
                            Q = A++;
                            if (v[Q] == null) {
                                v[Q] = document.createElementNS("http://www.w3.org/2000/svg", "line");
                                O == 0 && v[Q].setAttribute("shape-rendering", "crispEdges")
                            }
                            s = v[Q];
                            s.setAttribute("x1", V.positionScreen.x);
                            s.setAttribute("y1", V.positionScreen.y);
                            s.setAttribute("x2", S.positionScreen.x);
                            s.setAttribute("y2", S.positionScreen.y);
                            if (M instanceof THREE.LineBasicMaterial) {
                                F.__styleString = M.color.__styleString;
                                s.setAttribute("style", "fill: none; stroke: " + F.__styleString + "; stroke-width: " + M.linewidth + "; stroke-opacity: " + M.opacity + "; stroke-linecap: " + M.linecap + "; stroke-linejoin: " + M.linejoin);
                                b.appendChild(s)
                            }
                        }
                }
            } else if (w instanceof THREE.RenderableFace3) {
                u = w.v1;
                x = w.v2;
                H = w.v3;
                u.positionScreen.x *= y;
                u.positionScreen.y *= -z;
                x.positionScreen.x *= y;
                x.positionScreen.y *= -z;
                H.positionScreen.x *= y;
                H.positionScreen.y *= -z;
                p.addPoint(u.positionScreen.x, u.positionScreen.y);
                p.addPoint(x.positionScreen.x, x.positionScreen.y);
                p.addPoint(H.positionScreen.x, H.positionScreen.y);
                if (K.instersects(p)) {
                    I = 0;
                    for (L = w.meshMaterials.length; I < L; ) {
                        M = w.meshMaterials[I++];
                        if (M instanceof THREE.MeshFaceMaterial) {
                            V = 0;
                            for (S = w.faceMaterials.length; V < S; )
                                (M = w.faceMaterials[V++]) && c(u, x, H, w, M, N)
                        } else
                            M && c(u, x, H, w, M, N)
                    }
                }
            } else if (w instanceof THREE.RenderableFace4) {
                u = w.v1;
                x = w.v2;
                H = w.v3;
                J = w.v4;
                u.positionScreen.x *= y;
                u.positionScreen.y *= -z;
                x.positionScreen.x *= y;
                x.positionScreen.y *= -z;
                H.positionScreen.x *= y;
                H.positionScreen.y *= -z;
                J.positionScreen.x *= y;
                J.positionScreen.y *= -z;
                p.addPoint(u.positionScreen.x, u.positionScreen.y);
                p.addPoint(x.positionScreen.x, x.positionScreen.y);
                p.addPoint(H.positionScreen.x, H.positionScreen.y);
                p.addPoint(J.positionScreen.x, J.positionScreen.y);
                if (K.instersects(p)) {
                    I = 0;
                    for (L = w.meshMaterials.length; I < L; ) {
                        M = w.meshMaterials[I++];
                        if (M instanceof THREE.MeshFaceMaterial) {
                            V = 0;
                            for (S = w.faceMaterials.length; V < S; )
                                (M = w.faceMaterials[V++]) && d(u, x, H, J, w, M, N)
                        } else
                            M && d(u, x, H, J, w, M, N)
                    }
                }
            }
        }
    }
}
;
THREE.WebGLRenderer = function(a) {
    function c(e, j) {
        e.fragment_shader = j.fragment_shader;
        e.vertex_shader = j.vertex_shader;
        e.uniforms = Uniforms.clone(j.uniforms)
    }
    function d(e, j) {
        e.uniforms.color.value.setRGB(e.color.r * e.opacity, e.color.g * e.opacity, e.color.b * e.opacity);
        e.uniforms.opacity.value = e.opacity;
        e.uniforms.map.texture = e.map;
        e.uniforms.env_map.texture = e.env_map;
        e.uniforms.reflectivity.value = e.reflectivity;
        e.uniforms.refraction_ratio.value = e.refraction_ratio;
        e.uniforms.combine.value = e.combine;
        e.uniforms.useRefract.value = e.env_map && e.env_map.mapping instanceof THREE.CubeRefractionMapping;
        if (j) {
            e.uniforms.fogColor.value.setHex(j.color.hex);
            if (j instanceof THREE.Fog) {
                e.uniforms.fogNear.value = j.near;
                e.uniforms.fogFar.value = j.far
            } else if (j instanceof THREE.FogExp2)
                e.uniforms.fogDensity.value = j.density
        }
    }
    function f(e, j) {
        e.uniforms.color.value.setRGB(e.color.r * e.opacity, e.color.g * e.opacity, e.color.b * e.opacity);
        e.uniforms.opacity.value = e.opacity;
        if (j) {
            e.uniforms.fogColor.value.setHex(j.color.hex);
            if (j instanceof THREE.Fog) {
                e.uniforms.fogNear.value = j.near;
                e.uniforms.fogFar.value = j.far
            } else if (j instanceof THREE.FogExp2)
                e.uniforms.fogDensity.value = j.density
        }
    }
    function g(e, j) {
        var q;
        if (e == "fragment")
            q = b.createShader(b.FRAGMENT_SHADER);
        else if (e == "vertex")
            q = b.createShader(b.VERTEX_SHADER);
        b.shaderSource(q, j);
        b.compileShader(q);
        if (!b.getShaderParameter(q, b.COMPILE_STATUS)) {
            alert(b.getShaderInfoLog(q));
            return null
        }
        return q
    }
    function h(e) {
        switch (e) {
        case THREE.RepeatWrapping:
            return b.REPEAT;
        case THREE.ClampToEdgeWrapping:
            return b.CLAMP_TO_EDGE;
        case THREE.MirroredRepeatWrapping:
            return b.MIRRORED_REPEAT;
        case THREE.NearestFilter:
            return b.NEAREST;
        case THREE.NearestMipMapNearestFilter:
            return b.NEAREST_MIPMAP_NEAREST;
        case THREE.NearestMipMapLinearFilter:
            return b.NEAREST_MIPMAP_LINEAR;
        case THREE.LinearFilter:
            return b.LINEAR;
        case THREE.LinearMipMapNearestFilter:
            return b.LINEAR_MIPMAP_NEAREST;
        case THREE.LinearMipMapLinearFilter:
            return b.LINEAR_MIPMAP_LINEAR;
        case THREE.ByteType:
            return b.BYTE;
        case THREE.UnsignedByteType:
            return b.UNSIGNED_BYTE;
        case THREE.ShortType:
            return b.SHORT;
        case THREE.UnsignedShortType:
            return b.UNSIGNED_SHORT;
        case THREE.IntType:
            return b.INT;
        case THREE.UnsignedShortType:
            return b.UNSIGNED_INT;
        case THREE.FloatType:
            return b.FLOAT;
        case THREE.AlphaFormat:
            return b.ALPHA;
        case THREE.RGBFormat:
            return b.RGB;
        case THREE.RGBAFormat:
            return b.RGBA;
        case THREE.LuminanceFormat:
            return b.LUMINANCE;
        case THREE.LuminanceAlphaFormat:
            return b.LUMINANCE_ALPHA
        }
        return 0
    }
    var o = document.createElement("canvas"), b, i = null, k = null, y = new THREE.Matrix4, z, u = new Float32Array(16), x = new Float32Array(16), H = new Float32Array(16), J = new Float32Array(9), K = new Float32Array(16), p = true, U = new THREE.Color(0), F = 0;
    if (a) {
        if (a.antialias !== undefined)
            p = a.antialias;
        a.clearColor !== undefined && U.setHex(a.clearColor);
        if (a.clearAlpha !== undefined)
            F = a.clearAlpha
    }
    this.domElement = o;
    this.autoClear = true;
    (function(e, j, q) {
        try {
            b = o.getContext("experimental-webgl", {
                antialias: e
            })
        } catch (l) {}
        if (!b) {
            alert("WebGL not supported");
            throw "cannot create webgl context";
        }
        b.clearColor(0, 0, 0, 1);
        b.clearDepth(1);
        b.enable(b.DEPTH_TEST);
        b.depthFunc(b.LEQUAL);
        b.frontFace(b.CCW);
        b.cullFace(b.BACK);
        b.enable(b.CULL_FACE);
        b.enable(b.BLEND);
        b.blendFunc(b.ONE, b.ONE_MINUS_SRC_ALPHA);
        b.clearColor(j.r, j.g, j.b, q)
    }
    )(p, U, F);
    this.context = b;
    this.lights = {
        ambient: [0, 0, 0],
        directional: {
            length: 0,
            colors: [],
            positions: []
        },
        point: {
            length: 0,
            colors: [],
            positions: []
        }
    };
    this.setSize = function(e, j) {
        o.width = e;
        o.height = j;
        b.viewport(0, 0, o.width, o.height)
    }
    ;
    this.setClearColor = function(e, j) {
        var q = new THREE.Color(e);
        b.clearColor(q.r, q.g, q.b, j)
    }
    ;
    this.clear = function() {
        b.clear(b.COLOR_BUFFER_BIT | b.DEPTH_BUFFER_BIT)
    }
    ;
    this.setupLights = function(e, j) {
        var q, l, r, C = 0, m = 0, t = 0, v, s, n, E = this.lights, A = E.directional.colors, O = E.directional.positions, N = E.point.colors, G = E.point.positions, W = 0, P = 0;
        q = 0;
        for (l = j.length; q < l; q++) {
            r = j[q];
            v = r.color;
            s = r.position;
            n = r.intensity;
            if (r instanceof THREE.AmbientLight) {
                C += v.r;
                m += v.g;
                t += v.b
            } else if (r instanceof THREE.DirectionalLight) {
                A[W * 3] = v.r * n;
                A[W * 3 + 1] = v.g * n;
                A[W * 3 + 2] = v.b * n;
                O[W * 3] = s.x;
                O[W * 3 + 1] = s.y;
                O[W * 3 + 2] = s.z;
                W += 1
            } else if (r instanceof THREE.PointLight) {
                N[P * 3] = v.r * n;
                N[P * 3 + 1] = v.g * n;
                N[P * 3 + 2] = v.b * n;
                G[P * 3] = s.x;
                G[P * 3 + 1] = s.y;
                G[P * 3 + 2] = s.z;
                P += 1
            }
        }
        E.point.length = P;
        E.directional.length = W;
        E.ambient[0] = C;
        E.ambient[1] = m;
        E.ambient[2] = t
    }
    ;
    this.createParticleBuffers = function(e) {
        e.__webGLVertexBuffer = b.createBuffer();
        e.__webGLFaceBuffer = b.createBuffer()
    }
    ;
    this.createLineBuffers = function(e) {
        e.__webGLVertexBuffer = b.createBuffer();
        e.__webGLLineBuffer = b.createBuffer()
    }
    ;
    this.createMeshBuffers = function(e) {
        e.__webGLVertexBuffer = b.createBuffer();
        e.__webGLNormalBuffer = b.createBuffer();
        e.__webGLTangentBuffer = b.createBuffer();
        e.__webGLUVBuffer = b.createBuffer();
        e.__webGLFaceBuffer = b.createBuffer();
        e.__webGLLineBuffer = b.createBuffer()
    }
    ;
    this.initLineBuffers = function(e) {
        var j = e.vertices.length;
        e.__vertexArray = new Float32Array(j * 3);
        e.__lineArray = new Uint16Array(j);
        e.__webGLLineCount = j
    }
    ;
    this.initMeshBuffers = function(e, j) {
        var q, l, r = 0, C = 0, m = 0, t = j.geometry.faces, v = e.faces;
        q = 0;
        for (l = v.length; q < l; q++) {
            fi = v[q];
            face = t[fi];
            if (face instanceof THREE.Face3) {
                r += 3;
                C += 1;
                m += 3
            } else if (face instanceof THREE.Face4) {
                r += 4;
                C += 2;
                m += 4
            }
        }
        e.__vertexArray = new Float32Array(r * 3);
        e.__normalArray = new Float32Array(r * 3);
        e.__tangentArray = new Float32Array(r * 4);
        e.__uvArray = new Float32Array(r * 2);
        e.__faceArray = new Uint16Array(C * 3);
        e.__lineArray = new Uint16Array(m * 2);
        r = false;
        q = 0;
        for (l = j.materials.length; q < l; q++) {
            t = j.materials[q];
            if (t instanceof THREE.MeshFaceMaterial) {
                t = 0;
                for (v = e.materials.length; t < v; t++)
                    if (e.materials[t] && e.materials[t].shading != undefined && e.materials[t].shading == THREE.SmoothShading) {
                        r = true;
                        break
                    }
            } else if (t && t.shading != undefined && t.shading == THREE.SmoothShading) {
                r = true;
                break
            }
            if (r)
                break
        }
        e.__needsSmoothNormals = r;
        e.__webGLFaceCount = C * 3;
        e.__webGLLineCount = m * 2
    }
    ;
    this.setMeshBuffers = function(e, j, q, l, r, C, m, t) {
        var v, s, n, E, A, O, N, G, W, P = 0, I = 0, L = 0, V = 0, S = 0, w = 0, M = 0, Q = e.__vertexArray, ea = e.__uvArray, ba = e.__normalArray, Z = e.__tangentArray, ja = e.__faceArray, Y = e.__lineArray, qa = e.__needsSmoothNormals, ka = j.geometry, fa = ka.vertices, ha = e.faces, sa = ka.faces, ua = ka.uvs;
        j = 0;
        for (v = ha.length; j < v; j++) {
            s = ha[j];
            n = sa[s];
            s = ua[s];
            E = n.vertexNormals;
            A = n.normal;
            if (n instanceof THREE.Face3) {
                if (l) {
                    O = fa[n.a].position;
                    N = fa[n.b].position;
                    G = fa[n.c].position;
                    Q[I] = O.x;
                    Q[I + 1] = O.y;
                    Q[I + 2] = O.z;
                    Q[I + 3] = N.x;
                    Q[I + 4] = N.y;
                    Q[I + 5] = N.z;
                    Q[I + 6] = G.x;
                    Q[I + 7] = G.y;
                    Q[I + 8] = G.z;
                    I += 9
                }
                if (t && ka.hasTangents) {
                    O = fa[n.a].tangent;
                    N = fa[n.b].tangent;
                    G = fa[n.c].tangent;
                    Z[w] = O.x;
                    Z[w + 1] = O.y;
                    Z[w + 2] = O.z;
                    Z[w + 3] = O.w;
                    Z[w + 4] = N.x;
                    Z[w + 5] = N.y;
                    Z[w + 6] = N.z;
                    Z[w + 7] = N.w;
                    Z[w + 8] = G.x;
                    Z[w + 9] = G.y;
                    Z[w + 10] = G.z;
                    Z[w + 11] = G.w;
                    w += 12
                }
                if (m)
                    if (E.length == 3 && qa)
                        for (n = 0; n < 3; n++) {
                            A = E[n];
                            ba[S] = A.x;
                            ba[S + 1] = A.y;
                            ba[S + 2] = A.z;
                            S += 3
                        }
                    else
                        for (n = 0; n < 3; n++) {
                            ba[S] = A.x;
                            ba[S + 1] = A.y;
                            ba[S + 2] = A.z;
                            S += 3
                        }
                if (C && s)
                    for (n = 0; n < 3; n++) {
                        E = s[n];
                        ea[L] = E.u;
                        ea[L + 1] = E.v;
                        L += 2
                    }
                if (r) {
                    ja[V] = P;
                    ja[V + 1] = P + 1;
                    ja[V + 2] = P + 2;
                    V += 3;
                    Y[M] = P;
                    Y[M + 1] = P + 1;
                    Y[M + 2] = P;
                    Y[M + 3] = P + 2;
                    Y[M + 4] = P + 1;
                    Y[M + 5] = P + 2;
                    M += 6;
                    P += 3
                }
            } else if (n instanceof THREE.Face4) {
                if (l) {
                    O = fa[n.a].position;
                    N = fa[n.b].position;
                    G = fa[n.c].position;
                    W = fa[n.d].position;
                    Q[I] = O.x;
                    Q[I + 1] = O.y;
                    Q[I + 2] = O.z;
                    Q[I + 3] = N.x;
                    Q[I + 4] = N.y;
                    Q[I + 5] = N.z;
                    Q[I + 6] = G.x;
                    Q[I + 7] = G.y;
                    Q[I + 8] = G.z;
                    Q[I + 9] = W.x;
                    Q[I + 10] = W.y;
                    Q[I + 11] = W.z;
                    I += 12
                }
                if (t && ka.hasTangents) {
                    O = fa[n.a].tangent;
                    N = fa[n.b].tangent;
                    G = fa[n.c].tangent;
                    n = fa[n.d].tangent;
                    Z[w] = O.x;
                    Z[w + 1] = O.y;
                    Z[w + 2] = O.z;
                    Z[w + 3] = O.w;
                    Z[w + 4] = N.x;
                    Z[w + 5] = N.y;
                    Z[w + 6] = N.z;
                    Z[w + 7] = N.w;
                    Z[w + 8] = G.x;
                    Z[w + 9] = G.y;
                    Z[w + 10] = G.z;
                    Z[w + 11] = G.w;
                    Z[w + 12] = n.x;
                    Z[w + 13] = n.y;
                    Z[w + 14] = n.z;
                    Z[w + 15] = n.w;
                    w += 16
                }
                if (m)
                    if (E.length == 4 && qa)
                        for (n = 0; n < 4; n++) {
                            A = E[n];
                            ba[S] = A.x;
                            ba[S + 1] = A.y;
                            ba[S + 2] = A.z;
                            S += 3
                        }
                    else
                        for (n = 0; n < 4; n++) {
                            ba[S] = A.x;
                            ba[S + 1] = A.y;
                            ba[S + 2] = A.z;
                            S += 3
                        }
                if (C && s)
                    for (n = 0; n < 4; n++) {
                        E = s[n];
                        ea[L] = E.u;
                        ea[L + 1] = E.v;
                        L += 2
                    }
                if (r) {
                    ja[V] = P;
                    ja[V + 1] = P + 1;
                    ja[V + 2] = P + 2;
                    ja[V + 3] = P;
                    ja[V + 4] = P + 2;
                    ja[V + 5] = P + 3;
                    V += 6;
                    Y[M] = P;
                    Y[M + 1] = P + 1;
                    Y[M + 2] = P;
                    Y[M + 3] = P + 3;
                    Y[M + 4] = P + 1;
                    Y[M + 5] = P + 2;
                    Y[M + 6] = P + 2;
                    Y[M + 7] = P + 3;
                    M += 8;
                    P += 4
                }
            }
        }
        if (l) {
            b.bindBuffer(b.ARRAY_BUFFER, e.__webGLVertexBuffer);
            b.bufferData(b.ARRAY_BUFFER, Q, q)
        }
        if (m) {
            b.bindBuffer(b.ARRAY_BUFFER, e.__webGLNormalBuffer);
            b.bufferData(b.ARRAY_BUFFER, ba, q)
        }
        if (t && ka.hasTangents) {
            b.bindBuffer(b.ARRAY_BUFFER, e.__webGLTangentBuffer);
            b.bufferData(b.ARRAY_BUFFER, Z, q)
        }
        if (C && L > 0) {
            b.bindBuffer(b.ARRAY_BUFFER, e.__webGLUVBuffer);
            b.bufferData(b.ARRAY_BUFFER, ea, q)
        }
        if (r) {
            b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, e.__webGLFaceBuffer);
            b.bufferData(b.ELEMENT_ARRAY_BUFFER, ja, q);
            b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, e.__webGLLineBuffer);
            b.bufferData(b.ELEMENT_ARRAY_BUFFER, Y, q)
        }
    }
    ;
    this.setLineBuffers = function(e, j, q, l) {
        var r, C, m = e.vertices, t = m.length, v = e.__vertexArray, s = e.__lineArray;
        if (q)
            for (q = 0; q < t; q++) {
                r = m[q].position;
                C = q * 3;
                v[C] = r.x;
                v[C + 1] = r.y;
                v[C + 2] = r.z
            }
        if (l)
            for (q = 0; q < t; q++)
                s[q] = q;
        b.bindBuffer(b.ARRAY_BUFFER, e.__webGLVertexBuffer);
        b.bufferData(b.ARRAY_BUFFER, v, j);
        b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, e.__webGLLineBuffer);
        b.bufferData(b.ELEMENT_ARRAY_BUFFER, s, j)
    }
    ;
    this.setParticleBuffers = function() {}
    ;
    this.renderBuffer = function(e, j, q, l, r, C) {
        var m, t, v, s;
        if (!l.program) {
            if (l instanceof THREE.MeshDepthMaterial) {
                c(l, THREE.ShaderLib.depth);
                l.uniforms.mNear.value = e.near;
                l.uniforms.mFar.value = e.far
            } else if (l instanceof THREE.MeshNormalMaterial)
                c(l, THREE.ShaderLib.normal);
            else if (l instanceof THREE.MeshBasicMaterial) {
                c(l, THREE.ShaderLib.basic);
                d(l, q)
            } else if (l instanceof THREE.MeshLambertMaterial) {
                c(l, THREE.ShaderLib.lambert);
                d(l, q)
            } else if (l instanceof THREE.MeshPhongMaterial) {
                c(l, THREE.ShaderLib.phong);
                d(l, q)
            } else if (l instanceof THREE.LineBasicMaterial) {
                c(l, THREE.ShaderLib.basic);
                f(l, q)
            }
            var n, E, A;
            n = s = t = 0;
            for (E = j.length; n < E; n++) {
                A = j[n];
                A instanceof THREE.DirectionalLight && s++;
                A instanceof THREE.PointLight && t++
            }
            if (t + s <= 4) {
                n = s;
                t = t
            } else {
                n = Math.ceil(4 * s / (t + s));
                t = 4 - n
            }
            t = {
                directional: n,
                point: t
            };
            s = {
                fog: q,
                map: l.map,
                env_map: l.env_map,
                maxDirLights: t.directional,
                maxPointLights: t.point
            };
            t = l.fragment_shader;
            n = l.vertex_shader;
            E = b.createProgram();
            A = ["#ifdef GL_ES\nprecision highp float;\n#endif", "#define MAX_DIR_LIGHTS " + s.maxDirLights, "#define MAX_POINT_LIGHTS " + s.maxPointLights, s.fog ? "#define USE_FOG" : "", s.fog instanceof THREE.FogExp2 ? "#define FOG_EXP2" : "", s.map ? "#define USE_MAP" : "", s.env_map ? "#define USE_ENVMAP" : "", "uniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n"].join("\n");
            s = [b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS) > 0 ? "#define VERTEX_TEXTURES" : "", "#define MAX_DIR_LIGHTS " + s.maxDirLights, "#define MAX_POINT_LIGHTS " + s.maxPointLights, s.map ? "#define USE_MAP" : "", s.env_map ? "#define USE_ENVMAP" : "", "uniform mat4 objectMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\n"].join("\n");
            b.attachShader(E, g("fragment", A + t));
            b.attachShader(E, g("vertex", s + n));
            b.linkProgram(E);
            b.getProgramParameter(E, b.LINK_STATUS) || alert("Could not initialise shaders\nVALIDATE_STATUS: " + b.getProgramParameter(E, b.VALIDATE_STATUS) + ", gl error [" + b.getError() + "]");
            E.uniforms = {};
            E.attributes = {};
            l.program = E;
            t = ["viewMatrix", "modelViewMatrix", "projectionMatrix", "normalMatrix", "objectMatrix", "cameraPosition"];
            for (m in l.uniforms)
                t.push(m);
            m = l.program;
            n = 0;
            for (E = t.length; n < E; n++) {
                A = t[n];
                m.uniforms[A] = b.getUniformLocation(m, A)
            }
            m = l.program;
            t = ["position", "normal", "uv", "tangent"];
            n = 0;
            for (E = t.length; n < E; n++) {
                A = t[n];
                m.attributes[A] = b.getAttribLocation(m, A)
            }
        }
        m = l.program;
        if (m != i) {
            b.useProgram(m);
            i = m
        }
        this.loadCamera(m, e);
        this.loadMatrices(m);
        if (l instanceof THREE.MeshPhongMaterial || l instanceof THREE.MeshLambertMaterial) {
            this.setupLights(m, j);
            e = this.lights;
            l.uniforms.enableLighting.value = e.directional.length + e.point.length;
            l.uniforms.ambientLightColor.value = e.ambient;
            l.uniforms.directionalLightColor.value = e.directional.colors;
            l.uniforms.directionalLightDirection.value = e.directional.positions;
            l.uniforms.pointLightColor.value = e.point.colors;
            l.uniforms.pointLightPosition.value = e.point.positions
        }
        if (l instanceof THREE.MeshBasicMaterial || l instanceof THREE.MeshLambertMaterial || l instanceof THREE.MeshPhongMaterial)
            d(l, q);
        l instanceof THREE.LineBasicMaterial && f(l, q);
        if (l instanceof THREE.MeshPhongMaterial) {
            l.uniforms.ambient.value.setRGB(l.ambient.r, l.ambient.g, l.ambient.b);
            l.uniforms.specular.value.setRGB(l.specular.r, l.specular.g, l.specular.b);
            l.uniforms.shininess.value = l.shininess
        }
        q = l.uniforms;
        for (v in q)
            if (n = m.uniforms[v]) {
                j = q[v];
                t = j.type;
                e = j.value;
                if (t == "i")
                    b.uniform1i(n, e);
                else if (t == "f")
                    b.uniform1f(n, e);
                else if (t == "fv1")
                    b.uniform1fv(n, e);
                else if (t == "fv")
                    b.uniform3fv(n, e);
                else if (t == "v2")
                    b.uniform2f(n, e.x, e.y);
                else if (t == "v3")
                    b.uniform3f(n, e.x, e.y, e.z);
                else if (t == "c")
                    b.uniform3f(n, e.r, e.g, e.b);
                else if (t == "t") {
                    b.uniform1i(n, e);
                    if (j = j.texture)
                        if (j.image instanceof Array && j.image.length == 6) {
                            j = j;
                            e = e;
                            if (j.image.length == 6) {
                                if (!j.image.__webGLTextureCube && !j.image.__cubeMapInitialized && j.image.loadCount == 6) {
                                    j.image.__webGLTextureCube = b.createTexture();
                                    b.bindTexture(b.TEXTURE_CUBE_MAP, j.image.__webGLTextureCube);
                                    b.texParameteri(b.TEXTURE_CUBE_MAP, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE);
                                    b.texParameteri(b.TEXTURE_CUBE_MAP, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE);
                                    b.texParameteri(b.TEXTURE_CUBE_MAP, b.TEXTURE_MAG_FILTER, b.LINEAR);
                                    b.texParameteri(b.TEXTURE_CUBE_MAP, b.TEXTURE_MIN_FILTER, b.LINEAR_MIPMAP_LINEAR);
                                    for (t = 0; t < 6; ++t)
                                        b.texImage2D(b.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, j.image[t]);
                                    b.generateMipmap(b.TEXTURE_CUBE_MAP);
                                    b.bindTexture(b.TEXTURE_CUBE_MAP, null);
                                    j.image.__cubeMapInitialized = true
                                }
                                b.activeTexture(b.TEXTURE0 + e);
                                b.bindTexture(b.TEXTURE_CUBE_MAP, j.image.__webGLTextureCube)
                            }
                        } else {
                            j = j;
                            e = e;
                            if (!j.__webGLTexture && j.image.loaded) {
                                j.__webGLTexture = b.createTexture();
                                b.bindTexture(b.TEXTURE_2D, j.__webGLTexture);
                                b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, j.image);
                                b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, h(j.wrap_s));
                                b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, h(j.wrap_t));
                                b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, h(j.mag_filter));
                                b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, h(j.min_filter));
                                b.generateMipmap(b.TEXTURE_2D);
                                b.bindTexture(b.TEXTURE_2D, null)
                            }
                            b.activeTexture(b.TEXTURE0 + e);
                            b.bindTexture(b.TEXTURE_2D, j.__webGLTexture)
                        }
                }
            }
        v = m.attributes;
        b.bindBuffer(b.ARRAY_BUFFER, r.__webGLVertexBuffer);
        b.vertexAttribPointer(v.position, 3, b.FLOAT, false, 0, 0);
        b.enableVertexAttribArray(v.position);
        if (v.normal >= 0) {
            b.bindBuffer(b.ARRAY_BUFFER, r.__webGLNormalBuffer);
            b.vertexAttribPointer(v.normal, 3, b.FLOAT, false, 0, 0);
            b.enableVertexAttribArray(v.normal)
        }
        if (v.tangent >= 0) {
            b.bindBuffer(b.ARRAY_BUFFER, r.__webGLTangentBuffer);
            b.vertexAttribPointer(v.tangent, 4, b.FLOAT, false, 0, 0);
            b.enableVertexAttribArray(v.tangent)
        }
        if (v.uv >= 0)
            if (r.__webGLUVBuffer) {
                b.bindBuffer(b.ARRAY_BUFFER, r.__webGLUVBuffer);
                b.vertexAttribPointer(v.uv, 2, b.FLOAT, false, 0, 0);
                b.enableVertexAttribArray(v.uv)
            } else
                b.disableVertexAttribArray(v.uv);
        if (l.wireframe || l instanceof THREE.LineBasicMaterial) {
            v = l.wireframe_linewidth !== undefined ? l.wireframe_linewidth : l.linewidth !== undefined ? l.linewidth : 1;
            l = l instanceof THREE.LineBasicMaterial && C.type == THREE.LineStrip ? b.LINE_STRIP : b.LINES;
            b.lineWidth(v);
            b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, r.__webGLLineBuffer);
            b.drawElements(l, r.__webGLLineCount, b.UNSIGNED_SHORT, 0)
        } else {
            b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, r.__webGLFaceBuffer);
            b.drawElements(b.TRIANGLES, r.__webGLFaceCount, b.UNSIGNED_SHORT, 0)
        }
    }
    ;
    this.renderPass = function(e, j, q, l, r, C, m) {
        var t, v, s, n, E;
        s = 0;
        for (n = l.materials.length; s < n; s++) {
            t = l.materials[s];
            if (t instanceof THREE.MeshFaceMaterial) {
                t = 0;
                for (v = r.materials.length; t < v; t++)
                    if ((E = r.materials[t]) && E.blending == C && E.opacity < 1 == m) {
                        this.setBlending(E.blending);
                        this.renderBuffer(e, j, q, E, r, l)
                    }
            } else if ((E = t) && E.blending == C && E.opacity < 1 == m) {
                this.setBlending(E.blending);
                this.renderBuffer(e, j, q, E, r, l)
            }
        }
    }
    ;
    this.render = function(e, j, q, l) {
        var r, C, m, t = e.lights, v = e.fog;
        this.initWebGLObjects(e);
        l = l !== undefined ? l : true;
        if (q && !q.__webGLFramebuffer) {
            q.__webGLFramebuffer = b.createFramebuffer();
            q.__webGLRenderbuffer = b.createRenderbuffer();
            q.__webGLTexture = b.createTexture();
            b.bindRenderbuffer(b.RENDERBUFFER, q.__webGLRenderbuffer);
            b.renderbufferStorage(b.RENDERBUFFER, b.DEPTH_COMPONENT16, q.width, q.height);
            b.bindTexture(b.TEXTURE_2D, q.__webGLTexture);
            b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, h(q.wrap_s));
            b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, h(q.wrap_t));
            b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, h(q.mag_filter));
            b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, h(q.min_filter));
            b.texImage2D(b.TEXTURE_2D, 0, h(q.format), q.width, q.height, 0, h(q.format), h(q.type), null);
            b.bindFramebuffer(b.FRAMEBUFFER, q.__webGLFramebuffer);
            b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, q.__webGLTexture, 0);
            b.framebufferRenderbuffer(b.FRAMEBUFFER, b.DEPTH_ATTACHMENT, b.RENDERBUFFER, q.__webGLRenderbuffer);
            b.bindTexture(b.TEXTURE_2D, null);
            b.bindRenderbuffer(b.RENDERBUFFER, null);
            b.bindFramebuffer(b.FRAMEBUFFER, null)
        }
        if (q) {
            r = q.__webGLFramebuffer;
            m = q.width;
            C = q.height
        } else {
            r = null;
            m = o.width;
            C = o.height
        }
        if (r != k) {
            b.bindFramebuffer(b.FRAMEBUFFER, r);
            b.viewport(0, 0, m, C);
            l && b.clear(b.COLOR_BUFFER_BIT | b.DEPTH_BUFFER_BIT);
            k = r
        }
        this.autoClear && this.clear();
        j.autoUpdateMatrix && j.updateMatrix();
        u.set(j.matrix.flatten());
        H.set(j.projectionMatrix.flatten());
        l = 0;
        for (r = e.__webGLObjects.length; l < r; l++) {
            C = e.__webGLObjects[l];
            m = C.object;
            C = C.buffer;
            if (m.visible) {
                this.setupMatrices(m, j);
                this.renderPass(j, t, v, m, C, THREE.NormalBlending, false)
            }
        }
        l = 0;
        for (r = e.__webGLObjects.length; l < r; l++) {
            C = e.__webGLObjects[l];
            m = C.object;
            C = C.buffer;
            if (m.visible) {
                this.setupMatrices(m, j);
                if (m.doubleSided)
                    b.disable(b.CULL_FACE);
                else {
                    b.enable(b.CULL_FACE);
                    m.flipSided ? b.frontFace(b.CW) : b.frontFace(b.CCW)
                }
                this.renderPass(j, t, v, m, C, THREE.AdditiveBlending, false);
                this.renderPass(j, t, v, m, C, THREE.SubtractiveBlending, false);
                this.renderPass(j, t, v, m, C, THREE.AdditiveBlending, true);
                this.renderPass(j, t, v, m, C, THREE.SubtractiveBlending, true);
                this.renderPass(j, t, v, m, C, THREE.NormalBlending, true)
            }
        }
        if (q && q.min_filter !== THREE.NearestFilter && q.min_filter !== THREE.LinearFilter) {
            b.bindTexture(b.TEXTURE_2D, q.__webGLTexture);
            b.generateMipmap(b.TEXTURE_2D);
            b.bindTexture(b.TEXTURE_2D, null)
        }
    }
    ;
    this.initWebGLObjects = function(e) {
        function j(s, n, E, A) {
            if (s[n] == undefined) {
                e.__webGLObjects.push({
                    buffer: E,
                    object: A
                });
                s[n] = 1
            }
        }
        var q, l, r, C, m, t, v;
        if (!e.__webGLObjects) {
            e.__webGLObjects = [];
            e.__webGLObjectsMap = {}
        }
        q = 0;
        for (l = e.objects.length; q < l; q++) {
            r = e.objects[q];
            m = r.geometry;
            if (e.__webGLObjectsMap[r.id] == undefined)
                e.__webGLObjectsMap[r.id] = {};
            v = e.__webGLObjectsMap[r.id];
            if (r instanceof THREE.Mesh) {
                for (C in m.geometryChunks) {
                    t = m.geometryChunks[C];
                    if (!t.__webGLVertexBuffer) {
                        this.createMeshBuffers(t);
                        this.initMeshBuffers(t, r);
                        m.__dirtyVertices = true;
                        m.__dirtyElements = true;
                        m.__dirtyUvs = true;
                        m.__dirtyNormals = true;
                        m.__dirtyTangents = true
                    }
                    if (m.__dirtyVertices || m.__dirtyElements || m.__dirtyUvs)
                        this.setMeshBuffers(t, r, b.DYNAMIC_DRAW, m.__dirtyVertices, m.__dirtyElements, m.__dirtyUvs, m.__dirtyNormals, m.__dirtyTangents);
                    j(v, C, t, r)
                }
                m.__dirtyVertices = false;
                m.__dirtyElements = false;
                m.__dirtyUvs = false;
                m.__dirtyNormals = false;
                m.__dirtyTangents = false
            } else if (r instanceof THREE.Line) {
                if (!m.__webGLVertexBuffer) {
                    this.createLineBuffers(m);
                    this.initLineBuffers(m);
                    m.__dirtyVertices = true;
                    m.__dirtyElements = true
                }
                m.__dirtyVertices && this.setLineBuffers(m, b.DYNAMIC_DRAW, m.__dirtyVertices, m.__dirtyElements);
                j(v, 0, m, r);
                m.__dirtyVertices = false;
                m.__dirtyElements = false
            } else if (r instanceof THREE.ParticleSystem) {
                m.__webGLVertexBuffer || this.createParticleBuffers(m);
                j(v, 0, m, r)
            }
        }
    }
    ;
    this.removeObject = function(e, j) {
        var q, l;
        for (q = e.__webGLObjects.length - 1; q >= 0; q--) {
            l = e.__webGLObjects[q].object;
            j == l && e.__webGLObjects.splice(q, 1)
        }
    }
    ;
    this.setupMatrices = function(e, j) {
        e.autoUpdateMatrix && e.updateMatrix();
        y.multiply(j.matrix, e.matrix);
        x.set(y.flatten());
        z = THREE.Matrix4.makeInvert3x3(y).transpose();
        J.set(z.m);
        K.set(e.matrix.flatten())
    }
    ;
    this.loadMatrices = function(e) {
        b.uniformMatrix4fv(e.uniforms.viewMatrix, false, u);
        b.uniformMatrix4fv(e.uniforms.modelViewMatrix, false, x);
        b.uniformMatrix4fv(e.uniforms.projectionMatrix, false, H);
        b.uniformMatrix3fv(e.uniforms.normalMatrix, false, J);
        b.uniformMatrix4fv(e.uniforms.objectMatrix, false, K)
    }
    ;
    this.loadCamera = function(e, j) {
        b.uniform3f(e.uniforms.cameraPosition, j.position.x, j.position.y, j.position.z)
    }
    ;
    this.setBlending = function(e) {
        switch (e) {
        case THREE.AdditiveBlending:
            b.blendEquation(b.FUNC_ADD);
            b.blendFunc(b.ONE, b.ONE);
            break;
        case THREE.SubtractiveBlending:
            b.blendFunc(b.DST_COLOR, b.ZERO);
            break;
        default:
            b.blendEquation(b.FUNC_ADD);
            b.blendFunc(b.ONE, b.ONE_MINUS_SRC_ALPHA)
        }
    }
    ;
    this.setFaceCulling = function(e, j) {
        if (e) {
            !j || j == "ccw" ? b.frontFace(b.CCW) : b.frontFace(b.CW);
            if (e == "back")
                b.cullFace(b.BACK);
            else
                e == "front" ? b.cullFace(b.FRONT) : b.cullFace(b.FRONT_AND_BACK);
            b.enable(b.CULL_FACE)
        } else
            b.disable(b.CULL_FACE)
    }
    ;
    this.supportsVertexTextures = function() {
        return b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS) > 0
    }
}
;
THREE.Snippets = {
    fog_pars_fragment: "#ifdef USE_FOG\nuniform vec3 fogColor;\n#ifdef FOG_EXP2\nuniform float fogDensity;\n#else\nuniform float fogNear;\nuniform float fogFar;\n#endif\n#endif",
    fog_fragment: "#ifdef USE_FOG\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n#ifdef FOG_EXP2\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n#else\nfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n#endif\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, 1.0 ), fogFactor );\n#endif",
    envmap_pars_fragment: "#ifdef USE_ENVMAP\nvarying vec3 vReflect;\nuniform float reflectivity;\nuniform samplerCube env_map;\nuniform int combine;\n#endif",
    envmap_fragment: "#ifdef USE_ENVMAP\ncubeColor = textureCube( env_map, vec3( -vReflect.x, vReflect.yz ) );\nif ( combine == 1 ) {\ngl_FragColor = mix( gl_FragColor, cubeColor, reflectivity );\n} else {\ngl_FragColor = gl_FragColor * cubeColor;\n}\n#endif",
    envmap_pars_vertex: "#ifdef USE_ENVMAP\nvarying vec3 vReflect;\nuniform float refraction_ratio;\nuniform bool useRefract;\n#endif",
    envmap_vertex: "#ifdef USE_ENVMAP\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\nvec3 nWorld = mat3( objectMatrix[0].xyz, objectMatrix[1].xyz, objectMatrix[2].xyz ) * normal;\nif ( useRefract ) {\nvReflect = refract( normalize( mPosition.xyz - cameraPosition ), normalize( nWorld.xyz ), refraction_ratio );\n} else {\nvReflect = reflect( normalize( mPosition.xyz - cameraPosition ), normalize( nWorld.xyz ) );\n}\n#endif",
    map_pars_fragment: "#ifdef USE_MAP\nvarying vec2 vUv;\nuniform sampler2D map;\n#endif",
    map_pars_vertex: "#ifdef USE_MAP\nvarying vec2 vUv;\n#endif",
    map_fragment: "#ifdef USE_MAP\nmapColor = texture2D( map, vUv );\n#endif",
    map_vertex: "#ifdef USE_MAP\nvUv = uv;\n#endif",
    lights_pars_vertex: "uniform bool enableLighting;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n#ifdef PHONG\nvarying vec3 vPointLightVector[ MAX_POINT_LIGHTS ];\n#endif\n#endif",
    lights_vertex: "if ( !enableLighting ) {\nvLightWeighting = vec3( 1.0 );\n} else {\nvLightWeighting = ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nfloat directionalLightWeighting = max( dot( transformedNormal, normalize( lDirection.xyz ) ), 0.0 );\nvLightWeighting += directionalLightColor[ i ] * directionalLightWeighting;\n}\n#endif\n#if MAX_POINT_LIGHTS > 0\nfor( int i = 0; i < MAX_POINT_LIGHTS; i++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 pointLightVector = normalize( lPosition.xyz - mvPosition.xyz );\nfloat pointLightWeighting = max( dot( transformedNormal, pointLightVector ), 0.0 );\nvLightWeighting += pointLightColor[ i ] * pointLightWeighting;\n#ifdef PHONG\nvPointLightVector[ i ] = pointLightVector;\n#endif\n}\n#endif\n}",
    lights_pars_fragment: "#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nvarying vec3 vPointLightVector[ MAX_POINT_LIGHTS ];\n#endif\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;",
    lights_fragment: "vec3 normal = normalize( vNormal );\nvec3 viewPosition = normalize( vViewPosition );\nvec4 mSpecular = vec4( specular, opacity );\n#if MAX_POINT_LIGHTS > 0\nvec4 pointDiffuse  = vec4( 0.0 );\nvec4 pointSpecular = vec4( 0.0 );\nfor( int i = 0; i < MAX_POINT_LIGHTS; i++ ) {\nvec3 pointVector = normalize( vPointLightVector[ i ] );\nvec3 pointHalfVector = normalize( vPointLightVector[ i ] + vViewPosition );\nfloat pointDotNormalHalf = dot( normal, pointHalfVector );\nfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\nfloat pointSpecularWeight = 0.0;\nif ( pointDotNormalHalf >= 0.0 )\npointSpecularWeight = pow( pointDotNormalHalf, shininess );\npointDiffuse  += mColor * pointDiffuseWeight;\npointSpecular += mSpecular * pointSpecularWeight;\n}\n#endif\n#if MAX_DIR_LIGHTS > 0\nvec4 dirDiffuse  = vec4( 0.0 );\nvec4 dirSpecular = vec4( 0.0 );\nfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nvec3 dirHalfVector = normalize( lDirection.xyz + vViewPosition );\nfloat dirDotNormalHalf = dot( normal, dirHalfVector );\nfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\nfloat dirSpecularWeight = 0.0;\nif ( dirDotNormalHalf >= 0.0 )\ndirSpecularWeight = pow( dirDotNormalHalf, shininess );\ndirDiffuse  += mColor * dirDiffuseWeight;\ndirSpecular += mSpecular * dirSpecularWeight;\n}\n#endif\nvec4 totalLight = vec4( ambient, opacity );\n#if MAX_DIR_LIGHTS > 0\ntotalLight += dirDiffuse + dirSpecular;\n#endif\n#if MAX_POINT_LIGHTS > 0\ntotalLight += pointDiffuse + pointSpecular;\n#endif"
};
THREE.UniformsLib = {
    common: {
        color: {
            type: "c",
            value: new THREE.Color(15658734)
        },
        opacity: {
            type: "f",
            value: 1
        },
        map: {
            type: "t",
            value: 0,
            texture: null
        },
        env_map: {
            type: "t",
            value: 1,
            texture: null
        },
        useRefract: {
            type: "i",
            value: 0
        },
        reflectivity: {
            type: "f",
            value: 1
        },
        refraction_ratio: {
            type: "f",
            value: 0.98
        },
        combine: {
            type: "i",
            value: 0
        },
        fogDensity: {
            type: "f",
            value: 2.5E-4
        },
        fogNear: {
            type: "f",
            value: 1
        },
        fogFar: {
            type: "f",
            value: 2E3
        },
        fogColor: {
            type: "c",
            value: new THREE.Color(16777215)
        }
    },
    lights: {
        enableLighting: {
            type: "i",
            value: 1
        },
        ambientLightColor: {
            type: "fv",
            value: []
        },
        directionalLightDirection: {
            type: "fv",
            value: []
        },
        directionalLightColor: {
            type: "fv",
            value: []
        },
        pointLightPosition: {
            type: "fv",
            value: []
        },
        pointLightColor: {
            type: "fv",
            value: []
        }
    }
};
THREE.ShaderLib = {
    depth: {
        uniforms: {
            mNear: {
                type: "f",
                value: 1
            },
            mFar: {
                type: "f",
                value: 2E3
            }
        },
        fragment_shader: "uniform float mNear;\nuniform float mFar;\nvoid main() {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat color = 1.0 - smoothstep( mNear, mFar, depth );\ngl_FragColor = vec4( vec3( color ), 1.0 );\n}",
        vertex_shader: "void main() {\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}"
    },
    normal: {
        uniforms: {},
        fragment_shader: "varying vec3 vNormal;\nvoid main() {\ngl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, 1.0 );\n}",
        vertex_shader: "varying vec3 vNormal;\nvoid main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvNormal = normalize( normalMatrix * normal );\ngl_Position = projectionMatrix * mvPosition;\n}"
    },
    basic: {
        uniforms: THREE.UniformsLib.common,
        fragment_shader: ["uniform vec3 color;\nuniform float opacity;", THREE.Snippets.map_pars_fragment, THREE.Snippets.envmap_pars_fragment, THREE.Snippets.fog_pars_fragment, "void main() {\nvec4 mColor = vec4( color, opacity );\nvec4 mapColor = vec4( 1.0 );\nvec4 cubeColor = vec4( 1.0 );", THREE.Snippets.map_fragment, "gl_FragColor = mColor * mapColor;", THREE.Snippets.envmap_fragment, THREE.Snippets.fog_fragment, "}"].join("\n"),
        vertex_shader: [THREE.Snippets.map_pars_vertex, THREE.Snippets.envmap_pars_vertex, "void main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", THREE.Snippets.map_vertex, THREE.Snippets.envmap_vertex, "gl_Position = projectionMatrix * mvPosition;\n}"].join("\n")
    },
    lambert: {
        uniforms: Uniforms.merge([THREE.UniformsLib.common, THREE.UniformsLib.lights]),
        fragment_shader: ["uniform vec3 color;\nuniform float opacity;\nvarying vec3 vLightWeighting;", THREE.Snippets.map_pars_fragment, THREE.Snippets.envmap_pars_fragment, THREE.Snippets.fog_pars_fragment, "void main() {\nvec4 mColor = vec4( color, opacity );\nvec4 mapColor = vec4( 1.0 );\nvec4 cubeColor = vec4( 1.0 );", THREE.Snippets.map_fragment, "gl_FragColor =  mColor * mapColor * vec4( vLightWeighting, 1.0 );", THREE.Snippets.envmap_fragment, THREE.Snippets.fog_fragment, "}"].join("\n"),
        vertex_shader: ["varying vec3 vLightWeighting;", THREE.Snippets.map_pars_vertex, THREE.Snippets.envmap_pars_vertex, THREE.Snippets.lights_pars_vertex, "void main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", THREE.Snippets.map_vertex, THREE.Snippets.envmap_vertex, "vec3 transformedNormal = normalize( normalMatrix * normal );", THREE.Snippets.lights_vertex, "gl_Position = projectionMatrix * mvPosition;\n}"].join("\n")
    },
    phong: {
        uniforms: Uniforms.merge([THREE.UniformsLib.common, THREE.UniformsLib.lights, {
            ambient: {
                type: "c",
                value: new THREE.Color(328965)
            },
            specular: {
                type: "c",
                value: new THREE.Color(1118481)
            },
            shininess: {
                type: "f",
                value: 30
            }
        }]),
        fragment_shader: ["uniform vec3 color;\nuniform float opacity;\nuniform vec3 ambient;\nuniform vec3 specular;\nuniform float shininess;\nvarying vec3 vLightWeighting;", THREE.Snippets.map_pars_fragment, THREE.Snippets.envmap_pars_fragment, THREE.Snippets.fog_pars_fragment, THREE.Snippets.lights_pars_fragment, "void main() {\nvec4 mColor = vec4( color, opacity );\nvec4 mapColor = vec4( 1.0 );\nvec4 cubeColor = vec4( 1.0 );", THREE.Snippets.map_fragment, THREE.Snippets.lights_fragment, "gl_FragColor =  mapColor * totalLight * vec4( vLightWeighting, 1.0 );", THREE.Snippets.envmap_fragment, THREE.Snippets.fog_fragment, "}"].join("\n"),
        vertex_shader: ["#define PHONG\nvarying vec3 vLightWeighting;\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;", THREE.Snippets.map_pars_vertex, THREE.Snippets.envmap_pars_vertex, THREE.Snippets.lights_pars_vertex, "void main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", THREE.Snippets.map_vertex, THREE.Snippets.envmap_vertex, "#ifndef USE_ENVMAP\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\n#endif\nvViewPosition = cameraPosition - mPosition.xyz;\nvec3 transformedNormal = normalize( normalMatrix * normal );\nvNormal = transformedNormal;", THREE.Snippets.lights_vertex, "gl_Position = projectionMatrix * mvPosition;\n}"].join("\n")
    }
};
THREE.RenderableObject = function() {
    this.z = this.object = null
}
;
THREE.RenderableFace3 = function() {
    this.z = null;
    this.v1 = new THREE.Vertex;
    this.v2 = new THREE.Vertex;
    this.v3 = new THREE.Vertex;
    this.centroidWorld = new THREE.Vector3;
    this.centroidScreen = new THREE.Vector3;
    this.normalWorld = new THREE.Vector3;
    this.vertexNormalsWorld = [];
    this.faceMaterials = this.meshMaterials = null;
    this.overdraw = false;
    this.uvs = [null, null, null]
}
;
THREE.RenderableParticle = function() {
    this.rotation = this.z = this.y = this.x = null;
    this.scale = new THREE.Vector2;
    this.materials = null
}
;
THREE.RenderableLine = function() {
    this.z = null;
    this.v1 = new THREE.Vertex;
    this.v2 = new THREE.Vertex;
    this.materials = null
}
;
